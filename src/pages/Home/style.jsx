import styled from "styled-components";

export const Container = styled.div`
    min-height: 80vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 80vw;

    p {
        text-align: center;
        padding: 2rem;
        font-size: 2.5rem;
        font-weight: bold;
        margin: 0 auto;

        @media (max-width: 820px) {
            font-size: 1.9rem;
        }

        @media (max-width: 480px) {
            font-size: 1.5rem;
        }
    }    
`;
export const Grid = styled.div`
    max-width: 80vw;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 0 auto;
    gap: 25px;

    @media (max-width: 820px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
    }
    @media (max-width: 480px) {
        grid-template-columns: repeat(1, 1fr);
        gap: 25px;
    }

`;
