/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { ReactNode, useEffect, useMemo, useState } from 'react';
import Image from 'next/image';

import SearchNavbar from '../../components/SearchNavbar';
import Header from '../../components/Header';
import { useCart } from '../../hooks/useCart';
import { useOrder } from '../../hooks/useOrder';
import { formatPrice } from '../../util/format';

import { Container, ContainerTable, ProductTable } from './_styles';

interface Product {
  [x: string]: ReactNode;
  id: number;
  title: string;
  price: number;
  image: string;
  amount: number;
}

const Cart: React.FC = () => {
  const { cart, clearCart } = useCart();
  const { order, refreshOrders } = useOrder();

  useEffect(() => {
    refreshOrders();
  }, []);

  const orderFormatted = useMemo(() => {
    return order.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
      total: formatPrice(product.price * product.amount),
    }));
  }, [order]);

  return (
    <Container>
      <Header />
      <SearchNavbar />
      <ContainerTable>
        <ProductTable>
          <tbody>
            {orderFormatted.map(product => (
              <tr data-testid="product" key={product.id}>
                <td>
                  <img src={product.image} alt={product.title} />
                </td>
                <td>
                  <strong>{product.title}</strong>
                  <span>{product.priceFormatted}</span>
                </td>
                <td>
                  <div>
                    <input
                      type="text"
                      data-testid="product-amount"
                      readOnly
                      value={product.amount}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </ProductTable>
      </ContainerTable>
    </Container>
  );
};

export default Cart;
