import styled from "styled-components";

export const Container = styled.div`
    min-height: 80vh;
    
    p {
        text-align: center;
        padding: 2rem;
        font-size: 2.5rem;
        font-weight: bold;
    }    
`;
export const Grid = styled.div`
    max-width: 1200px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 45px;
    margin: 0 auto;
`;
