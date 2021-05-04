/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/require-default-props */
import React from 'react';

import CardCategories from '../../CardCategories';

export type CardProps = { link: string; image: string; title: string };

interface PropsCardCategories {
  cardImageListing?: Array<{
    link: string;
    image?: string;
    title?: string;
  }>;
}

const TypesCardCategories = ({ cardImageListing }: PropsCardCategories) => {
  return (
    <>
      <CardCategories cardImageListing={cardImageListing} />
    </>
  );
};

export default TypesCardCategories;
