import styled from "styled-components";

export const Button = styled.button`
    border-radius: 10px;
    background: #534F4F; 
    font-weight: 500;
    color: white;
    font-size: 20px;
    margin-top: 20px;
    font-family: 'Titillium web', 'sans-serif';
    padding: 0.5rem 1rem;
    cursor: pointer;
    align-items: center;
    font-family: 'Ibarra Real Nova', 'sans-serif';
    border: 0.75px solid black;
    transition: all 0.2s ease-in-out;

    &:hover{
        background: #D9D9D9;
        color: black;
        transition: all 0.2s ease-in-out;
        font-weight: 700;
    }
`