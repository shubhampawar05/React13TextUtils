import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Compments/Header/Header'
import Footer from './Compments/Footer/Footer'

const Layout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout