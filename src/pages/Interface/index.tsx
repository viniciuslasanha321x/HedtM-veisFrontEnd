import React, { useEffect, useState } from 'react';

import Carousel from '../../components/Carousel';
import CardCategories from '../../components/TypesCardCategories';
import CardViewedProducts from '../../components/TypesCardViewedProducts';

import api from '../../services/api';

import {
  Container,
  Navbar,
  Logo,
  Input,
  CarouselContainer,
  CardCategoriesContainer,
  CardMostViewedProducts,
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
  const [slides, setSlides] = useState<CardImages[]>([]);
  const [
    listImagesCardCategoriesInterface,
    setListImagesCardCategoriesInterface,
  ] = useState<CardImages[]>([]);
  const [
    listImagesCardMostViewdInterface,
    setListImagesCardMostViewdInterface,
  ] = useState<CardImages[]>([]);

  useEffect(() => {
    (async function loadSlides() {
      const { data: slidesCarousel } = await api.get<CardImages[]>('slides');
      // eslint-disable-next-line no-unused-expressions
      ('slides');

      const { data: imagesCardInterface } = await api.get<CardImages[]>(
        'imagesCardInterface',
      );

      const { data: imagesCardMostViewdInterface } = await api.get<
        CardImages[]
      >('imagesCardMostViewedProductsInterface');

      setSlides(slidesCarousel);
      setListImagesCardCategoriesInterface(imagesCardInterface);
      setListImagesCardMostViewdInterface(imagesCardMostViewdInterface);
    })();
  }, []);

  return (
    <Container>
      <Header />
      <Navbar>
        <Logo>
          <img src="/assets/LogoInterface.svg" alt="Image Logo" />
          <Input>
            <input placeholder="Search Product" />
            <button type="submit">
              <img src="/assets/IconSearch.svg" alt="search icon" />
            </button>
          </Input>
        </Logo>
      </Navbar>
      <CarouselContainer>
        <Carousel slides={slides} />
      </CarouselContainer>
      <CardCategoriesContainer>
        <h1>Categorias</h1>
        <CardCategories cardImageListing={listImagesCardCategoriesInterface} />
      </CardCategoriesContainer>
      <CardMostViewedProducts>
        <h1>Produtos Mais Vistos</h1>
        <CardViewedProducts
          cardImageListing={listImagesCardMostViewdInterface}
        />
      </CardMostViewedProducts>
    </Container>
  );
};

export default Interface;
