import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Home from '../Components/Home/Home'
import About from '../Components/About/About'
import Services from '../Components/Services/Services'
import Request from '../Components/Request/Request'
import Footer from '../Components/Footer/Footer'

const Pages = () => {
  return (
    <>
    <Navbar />
    <Home />
    <About />
    <Services />
    <Request />
    <Footer />
    </>
  )
}

export default Pages