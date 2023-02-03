import styled from "styled-components";
import { DefaultContent } from "../../styles/global";
import { motion } from "framer-motion"

export const HomeContent = styled(DefaultContent)`
    display: flex;
    justify-content: center;
`

export const DefaultFormContainer = styled(motion.div)`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 500px;
    min-height: 70vh;
    max-height: 90vh;
    padding: 5% 40px;
    border-radius: 15px;
    background-color: white;

    form {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    h1 {
        font-size: 40px;
        margin-bottom: 15%;
    }

    .inputs {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .input_container {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 10px;
        border-bottom: 3px solid #000;
        background-color: transparent;
    }

    label {
        font-size: 20px;
        margin-bottom: 10px;
    }

    .form_icon {
        width: 30px;
        height: 30px;
        color: #000;
    }

    .input_container:focus-within {
        border-color: #2B8CC4;

        .form_icon { color: #2B8CC4 }
    }

    input {
        display: flex;
        width: 100%;
        height: 40px;
        margin-left: 10px;
        background-color: transparent;
    }

    input:focus {
        outline: none;
    }

    span {
        height: 15px;
        margin-top: 5px;
        margin-bottom: 15px;
        font-size: 15px;
        color: red;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 45px;
        margin-top: 10%;
        border: 0;
        border-radius: 15px;
        font-size: 20px;
        background-color: #2B8CC4;
        color: white;
        cursor: pointer;
    }

    button:hover {
        background-color: white;
        color: #2B8CC4;
        border: 2px solid #2B8CC4;
        transition-property: background-color;
        transition-property: color;
        transition-duration: 0.5s;
    }

    p, a {
        margin-top: 10px;
    }

    a {
        cursor: pointer;
        color: #2B8CC4;
    }
`

export const DefaultFormContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    h1 {
        font-size: 40px;
        margin-bottom: 15%;
    }

    .inputs {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .input_container {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-bottom: 20px;
    }

    label {
        font-size: 20px;
        margin-bottom: 10px;
    }

    input {
        display: flex;
        height: 40px;
        padding-left: 8px;
        border: 2px solid black;
        border-radius: 15px;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 45px;
        margin-top: 15%;
        border: 0;
        border-radius: 15px;
        font-size: 20px;
        background-color: #2B8CC4;
        color: white;
        cursor: pointer;
    }

    button:hover {
        background-color: white;
        color: #2B8CC4;
        border: 2px solid #2B8CC4;
        transition-property: background-color;
        transition-property: color;
        transition-duration: 0.5s;
    }
`