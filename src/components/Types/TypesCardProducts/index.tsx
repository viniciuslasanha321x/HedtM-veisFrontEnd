/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/require-default-props */
import React from 'react';

import CardProducts from '../../CardProducts';

export type CardImages = {
  link: string;
  image: string;
  title: string;
  price?: string;
  discount?: string;
};

interface PropsCardCategories {
  cardImageListing?: Array<{
    link: string;
    image?: string;
    title?: string;
    price?: string;
    discount?: string;
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
