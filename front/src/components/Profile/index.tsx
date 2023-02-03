import { Client, Contact, Contacts, Options, ProfileContainer, ProfileContent } from "./styles"
import { HiUserCircle } from "react-icons/hi"
import { IoMdMail } from "react-icons/io"
import { BsFillTelephoneFill } from "react-icons/bs"
import { AiFillEdit } from "react-icons/ai"
import { TiUserAdd } from "react-icons/ti"
import { useContext, useEffect } from "react"
import { optionsContext } from "../../contexts/OptionsContext"
import { loadingContext } from "../../contexts/LoadingContext"
import { userContext } from "../../contexts/UserContext"
import api from "../../services/api"
import { cardContext } from "../../contexts/CardsContext"
import { toast } from "react-hot-toast"

const Profile = () => {

    const { activeLoading, desactiveLoading } = useContext(loadingContext)
    const { user, updateUser } = useContext(userContext)
    const { goToLogin } = useContext(cardContext)

    const { openEdit, openAddContact } = useContext(optionsContext)

    return (
        <ProfileContainer>
            <ProfileContent>
                <Client>
                    <Options>
                        <AiFillEdit className="option" onClick={() => openEdit()} />
                        <TiUserAdd className="option" onClick={() => openAddContact()} />
                    </Options>
                    <div className="profile_icon_container">
                        <HiUserCircle className="profile_icon" />
                        <h2>{user.name}</h2>
                    </div>
                    <div className="profile_details_container">
                        <IoMdMail className="detail_icon" />
                        <h3>{user.email}</h3>
                    </div>
                    <div className="profile_details_container">
                        <BsFillTelephoneFill className="detail_icon" />
                        <h3>{user.tel}</h3>
                    </div>
                </Client>
                <Contacts>
                    <h2>Contatos</h2>
                    <Contact>
                        <div className="left_info">
                            <h3>Hyago Matos</h3>
                            <span>hyago@mail.com</span>
                        </div>
                        <div className="right_info">
                            <h3>(92) 991271930</h3>
                        </div>
                    </Contact>
                    <Contact>
                        <div className="left_info">
                            <h3>Hyago Matos</h3>
                            <span>hyago@mail.com</span>
                        </div>
                        <div className="right_info">
                            <h3>(92) 991271930</h3>
                        </div>
                    </Contact>
                    <Contact>
                        <div className="left_info">
                            <h3>Hyago Matos</h3>
                            <span>hyago@mail.com</span>
                        </div>
                        <div className="right_info">
                            <h3>(92) 991271930</h3>
                        </div>
                    </Contact>
                    <Contact>
                        <div className="left_info">
                            <h3>Hyago Matos</h3>
                            <span>hyago@mail.com</span>
                        </div>
                        <div className="right_info">
                            <h3>(92) 991271930</h3>
                        </div>
                    </Contact>
                </Contacts>
            </ProfileContent>
        </ProfileContainer>
    )
}

export default Profile