/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { AnimatePresence } from 'framer-motion';
import { ToastContainer } from 'react-toastify';
import Global from '../styles/globalStyle';
import CarouselContextDashboard from '../components/ContextCardsImagesProductsAndPromotions';
import { CartProvider } from '../hooks/useCart';

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <CarouselContextDashboard>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} />
          <Global />
          <ToastContainer autoClose={3000} />
        </AnimatePresence>
      </CarouselContextDashboard>
    </CartProvider>
  );
}

export default MyApp;
