import React from 'react'
import { Outlet } from 'react-router'
import Hamburgersidebar from './Menu/Hamburgersidebar'
import Navbar from './Navbar/Navbar'

const Layout = () => {
  return (
    <div>
        <Navbar/>
        <Hamburgersidebar/>
        <Outlet/>
    </div>
  )
}

export default Layout