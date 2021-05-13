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
import { Product } from '../types';

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
  clearCart: (productId: number) => void;
  handleCheckout: (productId: number) => void;
  removeProduct: (productId: number) => void;
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [cart, setCart] = useState<Product[]>([]);

  async function handleGetOrders() {
    if (typeof window === 'undefined') {
      return;
    }

    // const { data } = await api.get('order/show');

    const storagedCart = localStorage.getItem('@HedtMoveis:cart');

    if (storagedCart) {
      return setCart(JSON.parse(storagedCart));
    }
  }

  useEffect(() => {
    handleGetOrders();
  }, []);

  const clearCart = () => {
    const storagedCart = window.localStorage.getItem('@HedtMoveis:cart');

    if (storagedCart) {
      window.localStorage.removeItem('@HedtMoveis:cart');
      setCart([]);
    }
  };

  const handleCheckout = () => {
    const orders = localStorage.getItem('@HedtMoveis:order');

    if (orders) {
      const ordersParse = JSON.parse(orders);

      localStorage.setItem(
        '@HedtMoveis:order',
        JSON.stringify([...ordersParse, ...cart]),
      );
    } else {
      localStorage.setItem('@HedtMoveis:order', JSON.stringify(cart));
    }

    // endpoint rota backend que salva as orders metodo:post

    clearCart();
    setCart([]);
  };

  const addProduct = async (productId: number) => {
    try {
      const { data } = await api.get(`cardmostviewedproducts/${productId}`);
      const stock: Product = data;
      const productExists = cart.find(product => product.id === productId);

      if (!productExists && stock.amount > 0) {
        const responseProducts = await api.get<Product>(
          `cardmostviewedproducts/${productId}`,
        );

        setCart(status => [...status, { ...responseProducts.data, amount: 1 }]);

        const teste = [...cart, { ...responseProducts.data, amount: 1 }];

        console.log('teste2', teste);

        localStorage.setItem('@HedtMoveis:cart', JSON.stringify(teste));

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

  const removeProduct = async (productId: number) => {
    const productIndex = cart.findIndex(product => product.id === productId);

    if (productIndex < 0) {
      return toast.error('Erro na remoção do produto');
    }

    // const { data } = await api.post(`order/decrement`, productId);

    const copyCart = cart;

    copyCart.splice(productIndex, 1);

    setCart([...copyCart]);

    localStorage.setItem('@HedtMoveis:cart', JSON.stringify(copyCart));

    toast.warning('Produto removido com sucesso.');
  };

  const updateProductAmount = async ({
    productId,
    amount,
  }: UpdateProductAmount) => {
    try {
      const { data } = await api.get(`cardmostviewedproducts/${productId}`);
      const stock: Product = data;

      if (amount <= stock.amount) {
        const newCartList = cart.map(product =>
          product.id === productId ? { ...product, amount } : product,
        );

        setCart(newCartList);

        localStorage.setItem('@HedtMoveis:cart', JSON.stringify(newCartList));
      } else {
        toast.warning('Limite Atingido.');
      }
    } catch {
      toast.error('Erro na alteração de quantidade do produto');
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct,
        removeProduct,
        updateProductAmount,
        clearCart,
        handleCheckout,
      }}
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
