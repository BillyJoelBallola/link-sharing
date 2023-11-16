import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from './components/Header'

const Layout = () => {
  return (
    <div className='w-screen font-poppins h-screen bg-gray-100 py-4'>
      <div className='mx-auto w-[95%]'>
        <Header />
        <Outlet />
      </div>
    </div>
  )
}

export default Layout