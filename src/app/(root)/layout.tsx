import React from 'react';
import Header from '@/components/Header/Header';
import Navbar from '@/components/Header/Navbar';
import Footer from '@/components/Footer/Footer';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header>
        <Header />
        <Navbar />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default layout;
