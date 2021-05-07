/* eslint-disable consistent-return */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { createContext, ReactNode, useContext, useState } from 'react';
import api from '../services/api';
import { Product } from '../types';

interface OrderProviderProps {
  children: ReactNode;
}

interface OrderContextData {
  refreshOrders: () => void;
  order: Product[];
}

const OrderContext = createContext<OrderContextData>({} as OrderContextData);

export function OrderProvider({ children }: OrderProviderProps): JSX.Element {
  const [order, setOrder] = useState<Product[]>([] as Product[]);

  const refreshOrders = () => {
    if (typeof window === 'undefined') {
      return;
    }

    const storagedOrder = localStorage.getItem('@HedtMoveis:order');

    if (storagedOrder) {
      setOrder(JSON.parse(storagedOrder));
    }
  };

  // use effect que chama endpoint de orders em especifico metodo:get

  return (
    <OrderContext.Provider
      value={{
        refreshOrders,
        order,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export function useOrder(): OrderContextData {
  const context = useContext(OrderContext);

  if (!context) {
    throw new Error('Provide some context');
  }

  return context;
}
