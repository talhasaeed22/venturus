import Image from 'next/image';
import { Inter } from 'next/font/google';
import Hero from '@/components/Hero/Hero';
import Discover from '@/components/Discover/Discover';
import Testimonials from '@/components/Testimonials/Testimonials';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className=''>
      <Hero />

      <div className=''>
        <Discover />
      </div>

      <div className='my-14'>
        <Testimonials />
      </div>
    </div>
  );
}
