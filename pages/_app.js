import '@/styles/globals.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { ClerkProvider } from '@clerk/nextjs';
export default function App({ Component, pageProps }) {
  return (
    <>
      <ClerkProvider>
        <Navbar /> <Component {...pageProps} /> <Footer />
      </ClerkProvider>
    </>
  );
}
