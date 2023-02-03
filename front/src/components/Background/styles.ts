import styled from "styled-components";
import { DefaultContainer } from "../../styles/global";

export const BackgroundContainer = styled(DefaultContainer)`
    min-height: 100vh;
    padding: 20px 15px;
    background: linear-gradient(60deg, var(--bc-00) 50%, var(--bc-01));
    background-size: 200% 200%;
    animation: bcAnimation 8s infinite both;

    @keyframes bcAnimation {
        0% {
            background-position: 0%;
        }
        50% {
            background-position: 100%;
        }
        100% {
            background-position: 0%;
        }
    }
    
`;