import { ReactNode } from 'react';

export interface Product {
  [x: string]: ReactNode;
  id: number;
  title: string;
  price: number;
  image: string;
  amount: number;
}

export interface Stock extends Product {
  id: number;
  amount: number;
}
