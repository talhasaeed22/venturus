import '@/styles/globals.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { ClerkProvider } from '@clerk/nextjs';
import { Provider } from 'react-redux'; 
import store from '@/store/store';

export default function App({ Component, pageProps }) {
  return (
    <>
    <Provider store={store}>
      <ClerkProvider>
        <Navbar /> <Component {...pageProps} /> <Footer />
      </ClerkProvider>
      </Provider>
    </>
  );
}
