import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import RootLayout from './components/RootLayout';
import Home from './pages/home/Home';
import Product from './pages/product/Product';
import Feature from './pages/features/Feature';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'product', element: <Product /> },
        { path: 'feature', element: <Feature /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
