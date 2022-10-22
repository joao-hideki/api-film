import styled from "styled-components";

export const Container = styled.div`
    box-sizing: border-box: 
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    min-width: 300px;
    background-color:  #111;
    padding: 1rem;
    border-radius: 20px;
    text-align: center;

    img {
        width: 100%;
        height: 400px;
    }
    
    h2 {
        color: white;  
    }

    p {
        color: #f7d354;       
    }
    
    a {
        padding: 0.5rem 100px;
        width: 70%;
        background-color: red;
        opacity: 0.6;
        border: 2px solid red;
        color: #111;
        border-radius: 15px;
        font-weight: bold;

        &:hover{
            opacity: 0.8;
        }
    }
`;