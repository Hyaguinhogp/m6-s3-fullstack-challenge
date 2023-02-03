import styled from "styled-components";
import { DefaultContainer } from "../../styles/global";

export const EditProfileContainer = styled(DefaultContainer)`
    position: absolute;
    height: 100vh;
    background-color: rgb(0, 0, 0, 0.5);

    .upbutton_container {
        display: flex;
        justify-content: right;
        width: 100%;
        font-size: 30px;
    }

    .close_button {
        cursor: pointer;
    }

    .close_button:hover {
        color: #2B8CC4;
    }
`