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

export const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    button {
        width: 45%;
    }

    .delete_button {
        background-color: #E03A2F;
    }

    .delete_button:hover {
        color: #E03A2F;
        border-color: #E03A2F;
    }
`