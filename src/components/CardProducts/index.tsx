/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { PropsWithChildren, useState, memo, useEffect } from 'react';
import Link from 'next/link';

import api from '../../services/api';
import { formatPrice } from '../../util/format';
import { useCart } from '../../hooks/useCart';
import ButtonAddListFavorites from '../ButtonAddListFavorites';

// Stylized components
import {
  Container,
  ListImages,
  ItemList,
  ContainerPrice,
  Title,
  ButtonCart,
} from './_styles';

export type CardProps = {
  id?: number;
  link: string;
  image?: string;
  title?: string;
  price?: number;
  discount?: string;
  priceFormatted?: string;
};

interface CardCategoriesProps {
  altImg?: string;
  cardImageListing?: CardProps[];
}

const CardMostViewedProducts = ({
  altImg,
}: PropsWithChildren<CardCategoriesProps>) => {
  const [isVisibleIconCheckedCart, setIsVisibleIconCheckedCart] = useState(
    true,
  );

  const [
    isVisibleIconCheckedCartSelected,
    setIsVisibleIconCheckedCartSelected,
  ] = useState(true);

  const [products, setProducts] = useState<CardProps[]>([]);
  const { addProduct, removeProduct, cart } = useCart();

  useEffect(() => {
    async function loadProducts() {
      const { data } = await api.get<CardProps[]>('/cardmostviewedproducts');

      const productsFormatted: CardProps[] = data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(productsFormatted);
    }

    loadProducts();
  }, []);

  const verifyItemCart = (id: number): boolean => {
    const result = cart.filter(item => item.id === id);

    return result.length > 0;
  };

  function handleProduct(id: number) {
    console.log(id);
    if (verifyItemCart(id)) {
      removeProduct(id);
      return;
    }
    addProduct(id);
  }

  return (
    <Container>
      {products.map((product, index) => {
        return (
          <ListImages key={index}>
            <ItemList>
              <Link href={`/${product.link}`} key={index}>
                <img src={product.image} alt={altImg} />
              </Link>

              <Title>
                <span>{product.title}</span>

                <ContainerPrice>
                  <div className="column">
                    <span className="price">{product.priceFormatted}</span>
                    <span className="discountPrice">R$ {product.discount}</span>

                    <ButtonCart>
                      <button
                        type="button"
                        onClick={() => handleProduct(product.id)}
                      >
                        {verifyItemCart(product.id) ? (
                          <img src="/assets/ShoppingCardIconSelected.svg" />
                        ) : (
                          <img src="/assets/ShoppingCartIcon.svg" />
                        )}
                      </button>
                    </ButtonCart>

                    <ButtonAddListFavorites />
                  </div>
                </ContainerPrice>
              </Title>
            </ItemList>
          </ListImages>
        );
      })}
    </Container>
  );
};

export default memo(CardMostViewedProducts);
