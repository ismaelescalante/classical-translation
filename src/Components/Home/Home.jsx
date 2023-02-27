import React from 'react'
import { Button } from '../../Button'
import Img from '../../images/image4.jpg'
import { HomeContainer, HomeBg, ImgBg, HomeContent, HomeH1, HomeP, HomeButtonWrapper } from './HomeElements'

const Home = () => {
  return (
    
    <HomeContainer>
      <HomeBg>
        <ImgBg src={Img} type='image4.jpg'/>
      </HomeBg>
      <HomeContent>
        <HomeH1>Classical Music Is For You</HomeH1>
        <HomeP>In Classical Translation we believe that classical music is more alive than ever.
          That's why we bring it to you in your own language, so you don't miss anything.
        </HomeP>
        
        
      </HomeContent>
    </HomeContainer>
    
  )
}

export default Home