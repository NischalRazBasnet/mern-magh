import React from 'react';
import Landing from './Landing';
import Feature from '../features/Feature';
import Product from '../product/Product';

export default function Home() {
  return (
    <div className='bg-body'>
      <Landing />
      <Product />
      <Feature />
    </div>
  );
}
