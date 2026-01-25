import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Scrolltotop from '../components/Scrolltotop'

export default function Layout() {
  return (
    <div className='flex flex-col min-h-screen'>
      <div className="flex flex-col min-h-screen">
        <Scrolltotop />
        <Header />

        {/* Main content */}
        <main className="flex-grow">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  )
}
