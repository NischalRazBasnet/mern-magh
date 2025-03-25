import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router';

export default function RootLayout() {
  return (
    <div className='mx-auto flex flex-col max-w-[1750px] min-h-screen'>
      <div className='flex-1'>
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
