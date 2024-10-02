import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer/Footer.jsx'
import Header from './Components/Header/Header.jsx'

function Layout () {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout