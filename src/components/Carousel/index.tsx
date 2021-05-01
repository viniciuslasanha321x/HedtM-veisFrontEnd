import React, { PropsWithChildren, memo } from 'react';
import SanCarousel from 'sancarousel';

// Stylized components

export type Slide = { link: string; img: string };

type CarouselProps = { slides: Slide[] };

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Carousel = ({ slides }: PropsWithChildren<CarouselProps>) => {
  console.log(slides);
  return (
    <>
      <SanCarousel
        slides={slides}
        autoPlay={4000}
        height="350px"
        slideSize="88%"
        focusSlide
        slideBorderRadius="10px"
        spaceBetweenSlides="10px"
        slideFocusColor="#AFAEAE"
      />
    </>
  );
};

export default memo(Carousel);
