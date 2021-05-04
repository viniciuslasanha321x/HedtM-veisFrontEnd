/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { PropsWithChildren, useState, memo } from 'react';

import Link from 'next/link';

// Stylized components
import { Container, ListImages, ItemList, Title } from './_styles';

export type CardImages = { link: string; image?: string; title?: string };

interface CardCategoriesProps {
  altImg?: string;
  cardImageListing?: CardImages[];
}

const CardCategories = ({
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
              </Title>
            </ItemList>
          </ListImages>
        );
      })}
    </Container>
  );
};

export default memo(CardCategories);
