/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/require-default-props */
import React from 'react';

import CardMostViewedProducts from '../CardMostViewedProducts';

export type CardImages = {
  link: string;
  image: string;
  title: string;
  price?: string;
};

interface PropsCardCategories {
  cardImageListing?: Array<{
    link: string;
    image?: string;
    title?: string;
    price?: string;
  }>;
}

const TypesCardViewedProducts = ({ cardImageListing }: PropsCardCategories) => {
  return (
    <>
      <CardMostViewedProducts cardImageListing={cardImageListing} />
    </>
  );
};

export default TypesCardViewedProducts;
