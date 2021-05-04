/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';

import Carousel from '../../components/Carousel';
import CardCategories from '../../components/Types/TypesCardCategories';
import CardProducts from '../../components/Types/TypesCardProducts';
import CardPromotionsProductsInterface from '../../components/Types/TypesCardPromotionsProductsInterface';
import { CarouselContextDashboard } from '../../components/ContextCardsImagesProductsAndPromotions';

import {
  Container,
  Navbar,
  Logo,
  Input,
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

export type CardImages = { link: string; img: string };

const Interface: React.FC = () => {
  const {
    slidesImagesCarousel,
    cardProductsCategories,
    cardProducts,
    cardPromotions,
  } = useContext(CarouselContextDashboard);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(function onFirstMount() {
    const handleChangeHeaderBackground = () => {
      if (window.scrollY >= 20) {
        return setIsScrolled(true);
      }
      return setIsScrolled(false);
    };

    window.addEventListener('scroll', handleChangeHeaderBackground);
  }, []);

  return (
    <Container>
      <Header />
      <Navbar isScrolled={isScrolled}>
        <Logo>
          <Image
            src="/assets/LogoInterface.svg"
            alt="Image Logo"
            width={250}
            height={72}
          />
          <Input>
            <input placeholder="Search Product" />
            <button type="submit">
              <Image
                src="/assets/IconSearch.svg"
                alt="search icon"
                width={14}
                height={16}
              />
            </button>
          </Input>
        </Logo>
      </Navbar>
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
