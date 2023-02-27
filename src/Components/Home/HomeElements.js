import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    z-index: 1;
    margin-bottom: 0;
    height: 640px;
`

export const HomeBg = styled.div`
   top: 0;
   bottom: 0;
   right: 0;
   left: 0;
   width: 100%;
   height: 100%;
    overflow: hidden;
`

export const ImgBg = styled.img`
    width: 100%;
    height: 100%;
`

export const HomeContent = styled.div`
    z-index: 3;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    color: white;
    padding: 2rem;
    margin-top: 170px;
`

export const HomeH1 = styled.h1`
    font-size: 80px;
    text-shadow: 2px 2px 10px #030303;

    @media (max-width: 1038px){
        font-size: 62px;
    }

    @media (max-width: 792px){
        font-size: 48px;
    }

    @media (max-width: 628px){
        font-size: 36px;
    }

    @media (max-width: 487px){
        font-size: 26px;
    }
`

export const HomeP = styled.p`
    font-size: 32px;
    text-shadow: 9px 9px 35px #000;

    @media (max-width: 1038px){
        font-size: 26px;
        margin-top: 20px;
    }

    @media (max-width: 792px){
        font-size: 20px;
    }

    @media (max-width: 628px){
        font-size: 16px;
    }
`



export const HomeButtonWrapper = styled.div`
    display: flex;
    margin-top: 40px;
`
