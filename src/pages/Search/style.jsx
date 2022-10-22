import styled from "styled-components";

export const Container = styled.div`
    p {
        text-align: center;
        padding: 2rem;
        font-size: 2.5rem;
        font-weight: bold;

        span{
            color: red;
        }
`;
export const Grid = styled.div`
    max-width: 1200px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 0 auto;
    gap: 40px;
`;