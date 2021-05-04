/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { createContext, useEffect, useState, ReactNode } from 'react';
import api from '../../services/api';

export type CardImages = {
  link: string;
  img: string;
  title?: string;
  price?: string;
  discount?: string;
};

interface ContextProps {
  children: ReactNode;
}

interface Context {
  slidesImagesCarousel: CardImages[];
  cardProductsCategories: CardImages[];
  cardProducts: CardImages[];
  cardPromotions: CardImages[];
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
  const [slidesImagesCarousel, setSlidesImagesCarousel] = useState<
    CardImages[]
  >([]);

  const [cardProductsCategories, setCardProductsCategories] = useState<
    CardImages[]
  >([]);

  const [cardProducts, setCardProducts] = useState<CardImages[]>([]);

  const [cardPromotions, setCardPromotions] = useState<CardImages[]>([]);

  async function reloadInitialData() {
    const { data: dataSlidesImagesCarousel } = await api.get<CardImages[]>(
      'slides',
    );

    const { data: dataImagesCardProductsCategories } = await api.get<
      CardImages[]
    >('cardproducts');

    const { data: dataCardProducts } = await api.get<CardImages[]>(
      'cardmostviewedproducts',
    );

    const { data: dataCardPromotions } = await api.get<CardImages[]>(
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
