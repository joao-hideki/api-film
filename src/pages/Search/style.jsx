import styled from "styled-components";

export const Container = styled.div`
    max-width: 80vw;
    margin: 0 auto;

    p {
        text-align: center;
        padding: 2rem;
        font-size: 2rem;
        font-weight: bold;

        span{
            color: red;
        }

        @media (max-width: 820px) {
            font-size: 1.8rem;
        }

        @media (max-width: 480px) {
            font-size: 1.5rem;
        }
    }
`;
export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;

    @media (max-width: 820px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
    }
    @media (max-width: 480px) {
        grid-template-columns: repeat(1, 1fr);
        gap: 25px;
    }

`;