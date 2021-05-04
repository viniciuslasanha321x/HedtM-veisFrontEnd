/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { AnimatePresence } from 'framer-motion';
import Global from '../styles/globalStyle';
import CarouselContextDashboard from '../components/ContextCardsImagesProductsAndPromotions';

function MyApp({ Component, pageProps }) {
  return (
    <CarouselContextDashboard>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
        <Global />
      </AnimatePresence>
    </CarouselContextDashboard>
  );
}

export default MyApp;
