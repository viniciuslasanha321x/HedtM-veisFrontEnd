import { AnimatePresence } from 'framer-motion';
import Global from '../styles/globalStyle';

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} />
      <Global />
    </AnimatePresence>
  );
}

export default MyApp;
