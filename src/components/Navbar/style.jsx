import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;   
    padding: 1rem 2rem;
    background-color: #121212;
    
    h2, a {        
        display: flex;
        align-items: center;
        gap: 0.5rem; 
        font-size: 2rem; 
        
        span{
            @media (max-width: 760px) {
                display: none;
            }
        }
     
    }

    form {
        display: flex;
        align-items: center;
        gap: 0.5rem; 

        input{
            padding: 0.8rem 1.5rem;
            border-radius: 5px;
            border: none;
            outline: none;
            font-size: 0.8rem
        }

        button{
            background-color: red; 
            border: 2px solid red;
            padding: 0.8rem;
            font-size: 0.7rem;
            border-radius: 4px;
            display: flex;
            align-items: center;
            cursor: pointer;

            &:hover{
                background-color: transparent;
                color: red;
            }
        }
    }


`;