/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useContext } from 'react';
import { Product } from '../../types';

interface IGlobalContext {
  cart: Product[];
  orders: Product[];
  removeFromCart: (product: Product) => void;
  clearCart: () => void;
  addToCart: (product: Product) => void;
  setOrders: (orders: Product[]) => void;
}
export const AppContext = createContext<IGlobalContext>({
  cart: [],
  orders: [],
  removeFromCart: (product: Product) => {},
  clearCart: () => {},
  addToCart: (product: Product) => {},
  setOrders: (orders: Product[]) => {},
});
export const useApp = () => useContext(AppContext);
