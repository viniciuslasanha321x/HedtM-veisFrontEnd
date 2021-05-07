/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';

import Carousel from '../../components/Carousel';
import CardCategories from '../../components/Types/TypesCardCategories';
import CardProducts from '../../components/Types/TypesCardProducts';
import SearchNavbar from '../../components/SearchNavbar';
import CardPromotionsProductsInterface from '../../components/Types/TypesCardPromotionsProductsInterface';
import { CarouselContextDashboard } from '../../components/ContextCardsImagesProductsAndPromotions';

import {
  Container,
  CarouselContainer,
  CardCategoriesContainer,
  CardMostViewedProducts,
  CardPromotions,
} from './_styles';
import Header from '../../components/Header';

const easing = [0.6, -0.5, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },

  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const Interface: React.FC = () => {
  const {
    slidesImagesCarousel,
    cardProductsCategories,
    cardProducts,
    cardPromotions,
  } = useContext(CarouselContextDashboard);

  return (
    <Container>
      <Header />
      <SearchNavbar />
      <CarouselContainer>
        <Carousel slides={slidesImagesCarousel} />
      </CarouselContainer>
      <CardCategoriesContainer>
        <h1>Categorias</h1>
        <CardCategories cardImageListing={cardProductsCategories} />
      </CardCategoriesContainer>
      <CardMostViewedProducts>
        <h2>Produtos Mais Vistos</h2>
        <CardProducts cardImageListing={cardProducts} />
      </CardMostViewedProducts>
      <CardPromotions>
        <h3>Promoções</h3>
        <CardPromotionsProductsInterface cardImageListing={cardPromotions} />
      </CardPromotions>
    </Container>
  );
};

export default Interface;
