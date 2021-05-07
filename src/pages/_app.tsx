/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { AnimatePresence } from 'framer-motion';
import { ToastContainer } from 'react-toastify';
import Global from '../styles/globalStyle';
import CarouselContextDashboard from '../components/ContextCardsImagesProductsAndPromotions';
import { CartProvider } from '../hooks/useCart';
import { OrderProvider } from '../hooks/useOrder';

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <OrderProvider>
        <CarouselContextDashboard>
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} />
            <Global />
            <ToastContainer autoClose={3000} className="toast-container" />
          </AnimatePresence>
        </CarouselContextDashboard>
      </OrderProvider>
    </CartProvider>
  );
}

export default MyApp;
