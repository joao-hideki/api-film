import styled from "styled-components";

export const Container = styled.div`
    color: white;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    max-width: 80vw;
    padding-top: 40px;
    gap: 50px;
    margin: 2rem auto;
    min-height: 80vh;

    svg{
        font-size: 1.5rem; 
    }
    img{
        height: 70vh;
    }

    p, div {
        margin-bottom: 1rem;
    }

    @media (max-width: 760px) {
        grid-template-columns: repeat(1, 1fr);
        max-width: 60vw;
        gap: 10px;
    }
`;
export const Info = styled.div`
    display: flex;
    flex-direction: column;    
    justify-content: center;

    h3{
        font-weight: bold;
    }
    
    p{
        font-weight: 500;
        margin-top: 5px;
    }
`;