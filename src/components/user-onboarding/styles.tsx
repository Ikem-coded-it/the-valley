import styled from "styled-components";

export const StyledModalBackground = styled.section`
    min-height: 100vh;
    max-height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 100px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 50;
    background-color: rgba(0, 0, 0, 0.7);
    overflow: auto;
    padding-bottom: 100px;
`

export const StyledModal = styled.div`
    width: 400px;
    background-color: #F6F7F9;
    padding: 32px;
    border-radius: 8px;
    gap: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    @media(max-width: ${({ theme }) => theme.screens.small}) {
        width: 320px;
        padding: 20px;
    }
`