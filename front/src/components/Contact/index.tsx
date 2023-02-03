import { IContact } from "../../contexts/UserContext"
import { ContactContent, ContactCotainer } from "./styles"
import { AiFillEdit } from "react-icons/ai"
import { MdDelete } from "react-icons/md"
import { useContext } from "react"
import { optionsContext } from "../../contexts/OptionsContext"

interface IContactProps {
    contact: IContact
}

const Contact = ({ contact }: IContactProps) => {

    const { setActualContactId, openEditContact, openDeleteContact } = useContext(optionsContext)

    return (
        <ContactCotainer
            whileHover={{
                height: "100px",
            }}
        >
            <ContactContent>
                <div className="contact_info">
                    <div className="left_info">
                        <h3>{contact.name}</h3>
                        <span>{contact.email}</span>
                    </div>
                    <div className="right_info">
                        <h3>{contact.tel}</h3>
                    </div>
                </div>
                <div className="contact_options">
                    <AiFillEdit className="option" onClick={() => {
                        openEditContact()
                        setActualContactId(contact.id)
                    }} />
                    <MdDelete className="option delete" onClick={() => {
                        openDeleteContact()
                        setActualContactId(contact.id)
                    }} />
                </div>
            </ContactContent>
        </ContactCotainer>
    )
}

export default Contact