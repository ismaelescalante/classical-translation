import React,  {useEffect, useState} from 'react'
import {Nav, NavLogo, NavMenu, NavItem, NavLinks} from './NavbarElements'
import { animateScroll as scroll } from 'react-scroll'


const Navbar = () => {

const [scrollNav, setScrollNav] = useState(false)

const changeNav = () => {
    if(window.scrollY >= 180) {
        setScrollNav(true)
    } else {
        setScrollNav(false)
    }
}

useEffect (()=> {
    window.addEventListener('scroll', changeNav)
}, [])

const toggleHome = () => {
    scroll.scrollToTop()
}

  return (
    <Nav scrollNav={scrollNav}>

         
            <NavLogo>
               Classical Translation
            </NavLogo>
    
         <NavMenu>
            <NavItem to='home' onClick={toggleHome}>
                <NavLinks >Home</NavLinks>
            </NavItem>
            <NavItem to='about'
            smooth={true}
            duration={600}
            spy={true}
            offset={-60}>
                <NavLinks 
                >About</NavLinks>
            </NavItem>
            <NavItem to='services'
            smooth={true}
            duration={600}
            spy={true}
            offset={0}>
                <NavLinks 
                
                >Services</NavLinks>
            </NavItem>
            <NavItem to='request'
            smooth={true}
            duration={600}
            spy={true}
            offset={-80}>
                <NavLinks 
                >Request</NavLinks>
            </NavItem>
         </NavMenu> 

        

    </Nav>
  )
}

export default Navbar