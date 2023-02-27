import styled from "styled-components";

export const ServicesContainer = styled.div`
    background: #1f1f1f;   
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem 2rem;
`
export const ServicesContent = styled.div`
    display: flex;
    margin-top: 30px;
    padding: 2rem;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    align-items: center;
`

export const ServicesH1 = styled.h1`
    font-size: 45px;
    color: white;
    margin-bottom: 20px;
`

export const ServicesP = styled.p`
    color: white;
    font-size: 26px;
    justify-content: center;
`

export const ServicesWrapper = styled.div`
    padding: 2rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 5px;
    justify-content: center;
    align-items: center;

    @media (max-width: 1098px){
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const ArticleImg = styled.img`
    width: 250px;
    height: 200px;
    display: none;
`

export const ServicesArticle = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    background: #534F4F; 
    font-size: 38px;
    width: 60%;
    margin: 45px;
    height: 85%;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    cursor: pointer;
    opacity: 0.80;
    padding: 1rem;

    &:hover {
        opacity: 1;
    }

    @media (max-width: 566px){
        width: 80%;
    }

    @media (max-width: 458px){
        width: 90%;
    }
    @media (max-width: 398px){
        width: 100%;
    }
`

export const ArticleP = styled.p`
    color: white;
    font-size: 24px;
    justify-content: center;
    align-items: center;
    margin: 20px;
`

export const ServicesBtn = styled.div`
    display: none;
`