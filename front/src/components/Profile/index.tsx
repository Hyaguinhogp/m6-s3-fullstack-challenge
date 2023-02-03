import { useContext } from "react"
import { AiFillEdit } from "react-icons/ai"
import { BsFillTelephoneFill } from "react-icons/bs"
import { HiUserCircle } from "react-icons/hi"
import { IoMdMail } from "react-icons/io"
import { TiUserAdd } from "react-icons/ti"
import { BiLogOut } from "react-icons/bi"
import { optionsContext } from "../../contexts/OptionsContext"
import { userContext } from "../../contexts/UserContext"
import { Client, Contacts, Options, ProfileContainer, ProfileContent } from "./styles"
import { cardContext } from "../../contexts/CardsContext"
import Contact from "../Contact"

const Profile = () => {
    const { user } = useContext(userContext)
    const { openEdit, openAddContact } = useContext(optionsContext)
    const { goToLogin } = useContext(cardContext)

    return (
        <ProfileContainer>
            <ProfileContent>
                <Client>
                    <Options>
                        <BiLogOut className="option" onClick={() => {
                            localStorage.removeItem("@client:token")
                            goToLogin()
                        }} />
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
                    {
                        user.contacts.length > 0 ? (
                            user.contacts.map((contact, index) => {
                                return (
                                    <Contact key={index} contact={contact} />
                                )
                            })
                        ) :
                            <h3>Adicione mais contatos</h3>
                    }
                </Contacts>
            </ProfileContent>
        </ProfileContainer>
    )
}

export default Profile