import React from 'react'
import Layout from './pages/Layout'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/Notfound'
import ProductDetail from './pages/Details'

export default function App() {

  const allrouters = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <Home />
          },
          {
            path: "/product/detail/:id?",
            element: <ProductDetail />
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
