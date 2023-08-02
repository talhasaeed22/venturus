import '@/styles/globals.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { Provider } from 'react-redux';
import store from '@/store/store';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Navbar /> <Component {...pageProps} /> <Footer />
      </Provider>
    </>
  );
}
