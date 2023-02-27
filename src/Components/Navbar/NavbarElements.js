import styled from "styled-components";
import { Link } from "react-scroll";

export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? 'black' : 'transparent')};
    color: white;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    z-index: 4;
    transition: all 0.3s ease-in-out;

    @media (max-width: 590px){
        justify-content: center;
    }
`

export const NavLogo = styled.h1` 
    margin-right: 10px;
    width: 100%;
    font-size: 24px;
    margin-left: 20px;
    justify-self: flex-start;
    align-items: center;
    font-weight: 700;

    @media (max-width: 590px){
        display: none;
    }
`

export const NavMenu = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
   
`

export const NavItem = styled(Link)`
    color: white;
    font-size: 20px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
      font-size: 22px;
      transition: all 0.2s ease-in-out;
    }

    @media (max-width: 370px){
        font-size: 16px;
    }
`

export const NavLinks = styled.p`
    cursor: pointer;
`