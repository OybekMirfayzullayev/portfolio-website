import React, { Fragment } from 'react'
import Navbar from './components/Navbar.jsx'
import Main from './components/Main.jsx'
import Section from './components/Section.jsx'
import Footer from './components/Footer.jsx'
import { Outlet } from 'react-router-dom'


export default function App() {


  
  return (
    <Fragment>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </Fragment>
  )
}
