/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/require-default-props */
import React from 'react';

import CardProducts from '../../CardProducts';

export type CardProps = {
  link: string;
  image: string;
  title: string;
  price?: string;
  discount?: string;
  priceFormatted?: string;
};

interface PropsCardCategories {
  cardImageListing?: Array<{
    id?: number;
    link: string;
    image?: string;
    title?: string;
    price?: string;
    discount?: string;
    priceFormatted?: string;
  }>;
}

const TypesCardProducts = ({ cardImageListing }: PropsCardCategories) => {
  return (
    <>
      <CardProducts cardImageListing={cardImageListing} />
    </>
  );
};

export default TypesCardProducts;
