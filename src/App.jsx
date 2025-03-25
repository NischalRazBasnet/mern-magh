import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import RootLayout from './components/RootLayout';
import Home from './pages/home/Home';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [{ index: true, element: <Home /> }],
    },
  ]);
  return <RouterProvider router={router} />;
}
