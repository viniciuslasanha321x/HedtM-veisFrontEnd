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
import { formatPrice } from '../../util/format';

import { Container, ContainerTable, ProductTable } from './_styles';
import { useFavorite } from '../../hooks/useFavorite';

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

const Favorites: React.FC = () => {
  const { favorite, removeProductFavorite } = useFavorite();

  const favoriteFormatted = useMemo(() => {
    if (!!favorite && !!favorite.length) {
      return favorite.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
        total: formatPrice(product.price * product.amount),
      }));
    }
    return [] as Product[];
  }, [favorite]);

  const total = formatPrice(
    favorite
      ? favorite.reduce((total, product) => {
          return (total += product.price * product.amount);
        }, 0)
      : 0,
  );

  function handleRemoveProduct(productId: number) {
    removeProductFavorite(productId);
  }

  return (
    <Container>
      <Header />
      <SearchNavbar />
      <ContainerTable>
        <ProductTable>
          <tbody>
            {favoriteFormatted.map(product => (
              <tr data-testid="product" key={product.id}>
                <td>
                  <img src={product.image} alt={product.title} />
                </td>
                <td>
                  <strong>{product.title}</strong>
                  <span>{product.priceFormatted}</span>
                </td>
                <td>
                  <button
                    type="button"
                    data-testid="remove-product"
                    onClick={() => handleRemoveProduct(product.id)}
                  >
                    <MdDelete size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </ProductTable>
      </ContainerTable>
    </Container>
  );
};

export default Favorites;
