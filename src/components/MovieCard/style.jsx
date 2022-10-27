import styled from "styled-components";

export const Container = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    min-width: 25vw;
    background-color:  #111;
    padding: 20px;
    border-radius: 20px;
    text-align: center;

    img {
        width: 100%;
        height: 50vh;
        border-radius: 5px;
    }
    
    h2 {
        font-size: 25px;
        color: white; 
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-top: 10px;
    }

    div{
        color: #f7d354;  
        font-size: 1.4rem;
        padding: 10px;
    }

    p {
        color: #f7d354;  
        font-size: 1rem;
    }

    button {
        width: 90%;
        padding: 10px;
        background-color: #bb1010;
        border-radius: 15px;
        border: none;
        font-weight: bold;
        font-size: 1rem;
        color: black;
        
        &:hover {
            opacity: 0.7;
        }
    }
    
   
`;

/* a {
        padding: 0.5rem 100px;
        max-width: 70%;
        display: flex;
        overflow: hidden;
        align-items: center;
        justify-content: center;
        margin: auto;
        background-color: red;
        opacity: 0.6;
        border: 2px solid red;
        color: #111;
        border-radius: 15px;
        font-weight: bold;
    

        &:hover{
            opacity: 0.8;
        }
    }*/
