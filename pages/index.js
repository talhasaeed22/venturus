import Image from 'next/image';
import { Inter } from 'next/font/google';
import Hero from '@/components/Hero/Hero';
import Discover from '@/components/Discover/Discover';
import Testimonials from '@/components/Testimonials/Testimonials';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className='bg-gradient-to-b from-[#2af598] to-[#009efd]'>
      <Hero />

      <div className='mt-28'>
        <Discover />
      </div>

      <div className='my-14'>
        <Testimonials />
      </div>
    </div>
  );
}
