/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { PropsWithChildren, useState, memo } from 'react';
import Link from 'next/link';

import ButtonCart from '../ButtonAddCart';
import ButtonAddListFavorites from '../ButtonAddListFavorites';

// Stylized components
import {
  Container,
  ListImages,
  ItemList,
  ContainerPrice,
  Title,
} from './_styles';

export type Slide = {
  link: string;
  image?: string;
  title?: string;
  price?: string;
};

interface CardCategoriesProps {
  altImg?: string;
  cardImageListing?: Slide[];
}

const CardMostViewedProducts = ({
  altImg,
  cardImageListing,
}: PropsWithChildren<CardCategoriesProps>) => {
  return (
    <Container>
      {cardImageListing.map((id, index) => {
        return (
          <ListImages key={index}>
            <ItemList>
              <Link href={`/${id.link}`} key={index}>
                <img src={id.image} alt={altImg} />
              </Link>
              <Title>
                <span>{id.title}</span>
                <ContainerPrice>
                  <span>R$ {id.price}</span>
                  <ButtonCart />
                  <ButtonAddListFavorites />
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
