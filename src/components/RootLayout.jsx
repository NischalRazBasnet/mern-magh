import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router';
import Footer from './Footer';

export default function RootLayout() {
  return (
    <div className='flex flex-col max-w-[1700px] min-h-screen'>
      <div className='flex-1'>
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
