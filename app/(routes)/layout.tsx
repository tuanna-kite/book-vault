import Footer from '@/components/footer';
import Header from '@/components/header';
import Navbar from '@/components/navbar';
import MobileHeader from '@/components/ui/mobile-header';
import React, { ReactNode } from 'react';

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      <Header />
      <MobileHeader />
      <div className='w-full mb-10'>{children}</div>
      <div className='py-16 bg-primary-light'>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
