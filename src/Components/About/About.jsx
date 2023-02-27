import React from 'react'
import { AboutContainer, AboutH1, AboutDescription, AboutP, AboutImgWrapper, AboutImg, AboutBtn } from './AboutElements'
import Img from '../../images/svg.svg'
import {Button} from '../../Button'


const About = () => {
  return (
    <AboutContainer id='about'>
      <AboutDescription>
        <AboutH1>
          What is Classical Translation?
        </AboutH1>
        <AboutP>
          In Classical Translation, we work to translate everything related with the Classical Music world.
          We work with several companies such as record labels, score editors, opera houses and many more to bring you everything you need in your own language.
          Classical Music was never that accessible!
          Are you interested in knowing what kind of services we provide? Feel free to explore and find the one you're looking for!
        </AboutP>
        <AboutBtn>
          <Button >Get started</Button>
        </AboutBtn>
        </AboutDescription>
        <AboutImgWrapper>
        <AboutImg src={Img} type='svg.svg'/>
        </AboutImgWrapper>
    </AboutContainer>
  )
}

export default About