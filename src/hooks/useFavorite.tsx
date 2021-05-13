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

interface FavoriteProviderProps {
  children: ReactNode;
}

interface FavoriteContextData {
  favorite: Product[];
  addProductFavorite: (productId: number) => void;
  removeProductFavorite: (productId: number) => void;
}

const FavoriteContext = createContext<FavoriteContextData>(
  {} as FavoriteContextData,
);

export function FavoriteProvider({
  children,
}: FavoriteProviderProps): JSX.Element {
  const [favorite, setFavorite] = useState<Product[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const storagedFavorite = localStorage.getItem('@HedtMoveis:favorite');

    if (storagedFavorite) {
      return setFavorite(JSON.parse(storagedFavorite));
    }
  }, []);

  const addProductFavorite = async (productId: number) => {
    try {
      const { data } = await api.get(`cardmostviewedproducts/${productId}`);
      const stock: Product = data;
      const productExists = favorite.find(product => product.id === productId);

      if (!productExists && stock.amount > 0) {
        const responseProducts = await api.get<Product>(
          `cardmostviewedproducts/${productId}`,
        );

        setFavorite(status => [
          ...status,
          { ...responseProducts.data, amount: 1 },
        ]);

        const teste = [...favorite, { ...responseProducts.data, amount: 1 }];

        localStorage.setItem('@HedtMoveis:favorite', JSON.stringify(teste));

        toast.success('Produto adicionado com sucesso.');
      }
    } catch (e) {
      toast.error('Erro na adição do produto');
    }
  };

  const removeProductFavorite = (productId: number) => {
    const productIndex = favorite.findIndex(
      product => product.id === productId,
    );

    if (productIndex < 0) {
      return toast.error('Erro na remoção do produto');
    }

    const copyFavorite = favorite;

    copyFavorite.splice(productIndex, 1);

    setFavorite([...copyFavorite]);

    localStorage.setItem('@HedtMoveis:favorite', JSON.stringify(copyFavorite));

    toast.warning('Produto removido com sucesso.');
  };

  return (
    <FavoriteContext.Provider
      value={{
        favorite,
        addProductFavorite,
        removeProductFavorite,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavorite(): FavoriteContextData {
  const context = useContext(FavoriteContext);

  if (!context) {
    throw new Error('Provide some context');
  }

  return context;
}
