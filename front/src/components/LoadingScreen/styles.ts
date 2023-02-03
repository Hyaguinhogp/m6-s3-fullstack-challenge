import styled from "styled-components";

export const LoadingScreenContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: rgb(0, 0, 0, 0.5);
    color: white;
`

export const LoadingScreenContent = styled.div`
    @keyframes rotate {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(359deg);
        }
    }
    .loading_icon {
        font-size: 50px;
        animation: rotate 1s infinite linear;
    }
`