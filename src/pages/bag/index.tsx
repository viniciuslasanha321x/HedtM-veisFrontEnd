/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { ReactNode, useMemo } from 'react';
import Image from 'next/image';

import {
  MdDelete,
  MdAddCircleOutline,
  MdRemoveCircleOutline,
} from 'react-icons/md';

import SearchNavbar from '../../components/SearchNavbar';
import Header from '../../components/Header';
import { useCart } from '../../hooks/useCart';
import { formatPrice } from '../../util/format';

import {
  Container,
  ContainerTable,
  Navbar,
  Logo,
  ProductTable,
  Total,
} from './_styles';

interface disableInformationsComponent {
  disableButtonDecrement: boolean;
  disableButtonIncrement: boolean;
  removeTrash: boolean;
  marginQuantity: string;
  disableLogo: boolean;
  disableButtonCheckout: boolean;
}
interface Product {
  [x: string]: ReactNode;
  id: number;
  title: string;
  price: number;
  image: string;
  amount: number;
}

const Cart: React.FC<disableInformationsComponent> = ({
  disableButtonDecrement = false,
  disableButtonIncrement = false,
  removeTrash = false,
  marginQuantity = '',
  disableLogo = false,
  disableButtonCheckout = false,
}) => {
  const { cart, removeProduct, updateProductAmount } = useCart();

  const cartFormatted = useMemo(() => {
    if (!!cart && !!cart.length) {
      return cart.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
        total: formatPrice(product.price * product.amount),
      }));
    }
    return [] as Product[];
  }, [cart]);

  const total = formatPrice(
    cart
      ? cart.reduce((total, product) => {
          return (total += product.price * product.amount);
        }, 0)
      : 0,
  );

  function handleProductIncrement(product: Product) {
    updateProductAmount({
      amount: product.amount + 1,
      productId: product.id,
    });
  }

  function handleProductDecrement(product: Product) {
    updateProductAmount({
      amount: product.amount - 1,
      productId: product.id,
    });
  }

  function handleRemoveProduct(productId: number) {
    removeProduct(productId);
  }

  return (
    <Container>
      <Header />
      {!disableLogo && <SearchNavbar />}
      <ContainerTable>
        <ProductTable marginQuantity={marginQuantity}>
          <thead>
            <tr>
              <th aria-label="product image" />
              <th>PRODUTO</th>
              <th>QUANTIDADE</th>
              <th aria-label="delete icon" />
            </tr>
          </thead>
          <tbody>
            {cartFormatted.map(product => (
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
                    {!disableButtonDecrement && (
                      <button
                        type="button"
                        data-testid="decrement-product"
                        disabled={product.amount <= 1}
                        onClick={() => handleProductDecrement(product)}
                      >
                        <MdRemoveCircleOutline size={20} />
                      </button>
                    )}
                    <p>{product.amount}</p>
                    {!disableButtonIncrement && (
                      <button
                        type="button"
                        data-testid="increment-product"
                        onClick={() => handleProductIncrement(product)}
                      >
                        <MdAddCircleOutline size={20} />
                      </button>
                    )}
                  </div>
                </td>
                <td>
                  {!removeTrash && (
                    <button
                      type="button"
                      data-testid="remove-product"
                      onClick={() => handleRemoveProduct(product.id)}
                    >
                      <MdDelete size={20} />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </ProductTable>

        <Total>
          <footer>
            {!disableButtonCheckout && (
              <button type="button">Finalizar pedido</button>
            )}
            <span>TOTAL</span>
            <strong>{total}</strong>
          </footer>
        </Total>
      </ContainerTable>
    </Container>
  );
};

export default Cart;
