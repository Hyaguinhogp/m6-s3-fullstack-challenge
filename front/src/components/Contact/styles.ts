import { motion } from "framer-motion";
import styled from "styled-components";

export const ContactCotainer = styled(motion.div)`
    display: flex;
    width: 100%;
    height: 60px;
    margin-bottom: 10px;
    overflow: hidden;
    border-bottom: 1px solid #ddd;
`

export const ContactContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 160px;

    .contact_info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 60px;
        padding: 10px 0px;

        h3 {
            font-size: 20px;
        }

        span {
            font-size: 15px;
            color: #888
        }
    }

    .contact_options {
        display: flex;
        justify-content: space-around;
    }

    .option {
        font-size: 30px;
        cursor: pointer;
    }

    .option:hover {
        color: #2B8CC4;
    }

    .delete:hover {
        color: red;
    }
`