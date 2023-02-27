import React from 'react'
import { FooterContainer, FooterWrapper,FooterTitle,FooterLink, Icon, FooterCopy } from './FooterElements'
import {BsInstagram, BsFacebook, BsYoutube, BsTwitter} from 'react-icons/bs'
const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterTitle>About Us</FooterTitle>
        <FooterLink>How it works</FooterLink>
        <FooterLink>Languages</FooterLink>
        <FooterLink>Companies</FooterLink>
        <FooterLink>Reviews</FooterLink>
      </FooterWrapper>
      <FooterWrapper>
        <FooterTitle>Contact Us</FooterTitle>
        <FooterLink>Contact</FooterLink>
        <FooterLink>Support</FooterLink>
        <FooterLink>Requests</FooterLink>
        <FooterLink>Job opportunities</FooterLink>
      </FooterWrapper>
      <FooterWrapper>
        <FooterTitle>Social Media</FooterTitle>
        <FooterLink><Icon><BsInstagram /></Icon>Instagram</FooterLink>
        <FooterLink><Icon><BsFacebook/></Icon>Facebook</FooterLink>
        <FooterLink><Icon><BsTwitter/></Icon>Twitter</FooterLink>
        <FooterLink><Icon><BsYoutube/></Icon>Youtube</FooterLink>
      </FooterWrapper>
      <FooterCopy>&copy; 2023 Ismael Escalante</FooterCopy>
    </FooterContainer>
  )
}

export default Footer