/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/require-default-props */
import React from 'react';

import CardPromotionsProductsInterface from '../../CardPromotionsProductsInterface';

export type CardImages = { link: string; image: string };

interface PropsCardCategories {
  cardImageListing?: Array<{
    link: string;
    image?: string;
  }>;
}

const TypesCardPromotionsProducts = ({
  cardImageListing,
}: PropsCardCategories) => {
  return (
    <>
      <CardPromotionsProductsInterface cardImageListing={cardImageListing} />
    </>
  );
};

export default TypesCardPromotionsProducts;
