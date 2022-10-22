import styled from "styled-components";

export const Container = styled.div`
    color: white;
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 1000px;
    gap: 50px;
    margin: 2rem auto;
    min-height: 80vh;

    svg{
        font-size: 1.5rem; 
    }

    p, div {
        margin-bottom: 1rem;
    }
`;
export const Info = styled.div`
    display: flex;
    flex-direction: column;    
    justify-content: center;
    
    p{
        font-weight: bold;
    }
`;