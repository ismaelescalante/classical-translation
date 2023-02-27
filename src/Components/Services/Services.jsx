import React from 'react'
import{ GiBlackBook} from 'react-icons/gi'
import {BsDisc, BsMusicNoteBeamed} from 'react-icons/bs'
import {MdOutlineSubtitles} from 'react-icons/md'

import { ServicesContainer, ServicesContent, ServicesH1, ServicesP, ServicesWrapper, ServicesArticle, ArticleP, ServicesBtn  } from './ServicesElements'


const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesContent>
      <ServicesH1>
        Our Services
      </ServicesH1>
      <ServicesP>
        Here is an example of our principal services. In Classical Translation, we try to cover every aspect of Classical Music so you can improve your experience and get to enjoy music even more.
      </ServicesP>
      </ServicesContent>
      <ServicesWrapper>
        <ServicesArticle>
          <BsDisc />
          CD Booklets
          <ArticleP>All the information on the CD's on your collection will be available now in your language.</ArticleP>
          <ServicesBtn>
          </ServicesBtn>
          </ServicesArticle>
        <ServicesArticle>
          <BsMusicNoteBeamed />
          Sheet Music
          <ArticleP>Now you will be able to improve your interpretation of your favorite works.</ArticleP>
          <ServicesBtn>
        
          </ServicesBtn>
          </ServicesArticle>
        <ServicesArticle>

          <MdOutlineSubtitles />
          Subtitling
          <ArticleP>Don't miss any detail from the stories the operas and symphonic works have to tell you.</ArticleP>
          <ServicesBtn>
        
          </ServicesBtn>
          </ServicesArticle>
        <ServicesArticle>
          <GiBlackBook />
          Books
          <ArticleP>The best books with a vast amount of knowledge can be accessible in your mother tongue.</ArticleP>
          <ServicesBtn>
        
          </ServicesBtn>
          </ServicesArticle>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services