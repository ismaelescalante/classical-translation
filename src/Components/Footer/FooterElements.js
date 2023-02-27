import styled from "styled-components";

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: row;
    /* align-items: center; */
    background: black;

`

export const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px; 
    width: 100%;

    @media (max-width: 475px){
        display: none;
    }
    
`

export const FooterTitle = styled.h4`
    color: white;
    font-size: 20px;
    margin-bottom: 10px;

    @media (max-width: 475px){
        display: none;
    }
`

export const FooterLink = styled.div`
    color: white;
    display: flex;
    font-size: 16px;
    cursor: pointer;
    margin: 5px 0px;

    @media (max-width: 475px){
        display: none;
    }
    
`

export const Icon = styled.div`
    margin-right: 15px;
    
`

export const FooterCopy = styled.p`
    display: none;
    color: white;
    text-align: center;
    padding: 2rem;

    @media (max-width: 475px){
        display: inline;
    }
`