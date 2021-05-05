/* eslint-disable consistent-return */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { toast } from 'react-toastify';
import api from '../services/api';
import { Product, Stock } from '../types';

interface CartProviderProps {
  children: ReactNode;
}

interface UpdateProductAmount {
  productId: number;
  amount: number;
}

interface CartContextData {
  cart: Product[];
  addProduct: (productId: number) => void;
  removeProduct: (productId: number) => void;
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [cart, setCart] = useState<Product[]>(() => {
    let storagedCart = '[]';

    if (typeof window !== 'undefined') {
      storagedCart = localStorage.getItem('@HedtMoveis:cart') || '[]';
    }

    return JSON.parse(storagedCart);
  });

  const addProduct = async (productId: number) => {
    try {
      const { data } = await api.get(`stock/${productId}`);
      const stock: Stock = data;
      const productExists = cart.find(product => product.id === productId);

      if (!productExists && stock.amount > 0) {
        const responseProducts = await api.get<Product>(
          `cardmostviewedproducts/${productId}`,
        );

        setCart(status => [...status, { ...responseProducts.data, amount: 1 }]);

        localStorage.setItem(
          '@HedtMoveis:cart',
          JSON.stringify([...cart, { ...responseProducts.data, amount: 1 }]),
        );

        toast.success('Produto adicionado com sucesso.');
      } else if (productExists && productExists.amount <= stock.amount) {
        const amount = productExists.amount + 1;
        updateProductAmount({
          productId,
          amount,
        });
      } else {
        toast.error('Quantidade solicitada fora de estoque');
      }
    } catch (e) {
      toast.error('Erro na adição do produto');
    }
  };

  const removeProduct = (productId: number) => {
    const productExists = cart.find(product => product.id === productId);

    if (!productExists) {
      return toast.error('Erro na remoção do produto');
    }

    if (productExists) {
      const productsWithoutProductId = cart.filter(
        product => product.id !== productId,
      );

      setCart(productsWithoutProductId);

      localStorage.setItem(
        '@HedtMoveis:cart',
        JSON.stringify(productsWithoutProductId),
      );
    }

    toast.warning('Produto removido com sucesso.');
  };

  const updateProductAmount = async ({
    productId,
    amount,
  }: UpdateProductAmount) => {
    try {
      const { data } = await api.get(`stock/${productId}`);
      const stock: Stock = data;

      if (amount < 1) {
        return;
      }
      if (amount <= stock.amount) {
        const newCartList = cart.map(product =>
          product.id === productId ? { ...product, amount } : product,
        );

        setCart(newCartList);

        localStorage.setItem('@HedtMoveis:cart', JSON.stringify(newCartList));
      }
    } catch {
      toast.error('Erro na alteração de quantidade do produto');
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, updateProductAmount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('Provide some context');
  }

  return context;
}
