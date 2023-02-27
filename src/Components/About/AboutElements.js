import styled from "styled-components";

export const AboutContainer = styled.div`
    background: linear-gradient(180deg, #000000 0%, #1F1F1F 100%) ;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    top: 0;
    color: white;
    height: 100%;
    width: 100%;
`

export const AboutDescription = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 15px;
    padding: 2rem;

    @media (max-width: 1234px){
        width: 100%;
    }
    
`


export const AboutH1 = styled.h1`
    padding: 3rem;
    font-size: 35px;
    color: white;

    @media (max-width: 1234px){
        text-align: center;
    }
`

export const AboutP = styled.p`
    color: white;
    font-size: 25px;
    padding: 2rem;
    margin-bottom: 20px;
    color: white;

    @media (max-width: 1234px){
        text-align: center;
    }
`

export const AboutBtn = styled.div`
    display: flex;
    justify-content: center;
`

export const AboutImgWrapper = styled.div`
    width: 100%;
    height: 100%;
    margin-right: 10px;

    @media (max-width: 1234px){
        display: none;
    }
`

export const AboutImg = styled.img`
    width: 100%;
    height: 100%;
    padding-left: 2rem;
    padding-right: 2rem;

    @media (max-width: 1234px){
        display: none;
    }

    
`