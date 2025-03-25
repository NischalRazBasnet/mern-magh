import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import RootLayout from './components/RootLayout';
import Home from './pages/home/Home';
import Temperature from './pages/temperature/Temperature';
import Counter from './pages/counter/Counter';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'counter', element: <Counter /> },
        { path: 'temperature', element: <Temperature /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
