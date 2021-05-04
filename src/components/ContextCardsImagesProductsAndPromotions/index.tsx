/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { createContext, useEffect, useState, ReactNode } from 'react';
import api from '../../services/api';

export type CardProps = {
  id: number;
  link: string;
  img: string;
  title?: string;
  price?: number;
  discount?: string;
};

interface ContextProps {
  children: ReactNode;
}

interface Context {
  slidesImagesCarousel: CardProps[];
  cardProductsCategories: CardProps[];
  cardProducts: CardProps[];
  cardPromotions: CardProps[];
}

export const CarouselContextDashboard = createContext<Context>({
  slidesImagesCarousel: [],
  cardProductsCategories: [],
  cardProducts: [],
  cardPromotions: [],
});

export function ContextCardsImagesProductsAndPromotions({
  children,
}: ContextProps) {
  const [slidesImagesCarousel, setSlidesImagesCarousel] = useState<CardProps[]>(
    [],
  );

  const [cardProductsCategories, setCardProductsCategories] = useState<
    CardProps[]
  >([]);

  const [cardProducts, setCardProducts] = useState<CardProps[]>([]);

  const [cardPromotions, setCardPromotions] = useState<CardProps[]>([]);

  async function reloadInitialData() {
    const { data: dataSlidesImagesCarousel } = await api.get<CardProps[]>(
      'slides',
    );

    const { data: dataImagesCardProductsCategories } = await api.get<
      CardProps[]
    >('cardproducts');

    const { data: dataCardProducts } = await api.get<CardProps[]>(
      'cardmostviewedproducts',
    );

    const { data: dataCardPromotions } = await api.get<CardProps[]>(
      'cardpromotions',
    );

    setSlidesImagesCarousel(dataSlidesImagesCarousel);

    setCardProductsCategories(dataImagesCardProductsCategories);

    setCardProducts(dataCardProducts);

    setCardPromotions(dataCardPromotions);
  }

  useEffect(() => {
    reloadInitialData();
  }, []);

  return (
    <CarouselContextDashboard.Provider
      value={{
        slidesImagesCarousel,
        cardProductsCategories,
        cardProducts,
        cardPromotions,
      }}
    >
      {children}
    </CarouselContextDashboard.Provider>
  );
}

export default ContextCardsImagesProductsAndPromotions;
