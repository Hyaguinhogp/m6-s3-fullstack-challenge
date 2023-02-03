import styled from "styled-components";

export const ProfileContainer = styled.div`
    display: flex;
    width: 100%;
    min-height: 90vh;
    padding: 30px;
    background-color: white;
    border-radius: 10px;
`

export const ProfileContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    @media(min-width: 800px) {
        flex-direction: row;
    }
`

export const Client = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-bottom: 1px solid #ddd;

    .profile_icon_container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 30px;
        font-size: 30px;
        font-weight: 500;
    }

    .profile_icon {
        width: 200px;
        height: 200px;
    }

    .profile_details_container {
        display: flex;
        align-items: center;
        font-size: 20px;
        margin-bottom: 15px;
    }

    .detail_icon {
        margin-right: 10px;
        width: 30px;
        height: 30px;
    }

    @media(min-width: 800px) {
        height: 100%;
        padding-right: 30px;
        border-bottom: none;
        border-right: 1px solid #ddd;
    }
`

export const Options = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ddd;
    padding-bottom: 30px;
    
    .option {
        font-size: 30px;
        cursor: pointer;
    }

    .option:hover {
        color: #2B8CC4;
    }
`

export const Contacts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    h2 {
        margin: 20px 0px;
        font-size: 30px;
        font-weight: 500;
    }

    @media(min-width: 800px) {
        padding-left: 30px;
    }
`