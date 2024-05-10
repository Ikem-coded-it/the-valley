import styled from "styled-components";

export const StyledEthosItem = styled.div`
    width: 100%;
    background-color: #227A5F;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 8px;
    padding: 16px;
    border-bottom: 1px solid #11362D;

    > h2 {
        font-weight: 600;
        font-size: 20px;
        color: #F9FAFB;
    }

    > p {
        color: #B6E4D0;
        font-size: 16px;
        font-weight: 500;
    }
`;

export const StyledEhosContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    border-radius: 16px;
    overflow: clip;
`;