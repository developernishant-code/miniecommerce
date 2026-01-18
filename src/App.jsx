import React from 'react'
import Layout from './pages/Layout'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/Notfound'
import ProductDetail from './pages/Details'
import CartUI from './pages/Cart';

export default function App() {

  const allrouters = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "/:slug?",
            element: <Home />
          },
          {
            path: "/product/detail/:id?",
            element: <ProductDetail />
          },
          {
            path: "/cart",
            element: <CartUI />
          },
          {
            path: "/about",
            element: <About />
          },
          {
            path: "/contact",
            element: <Contact />
          }
        ]
      },
      {
        path: "*",
        element: <NotFound />
      }
    ]
  )

  return (
    <RouterProvider router={allrouters} />
  )
}
