import AppDataSource from "../../data-source"
import { Client } from "../../entities/client"
import { Contact } from "../../entities/contact"
import { AppError } from "../../errors"
import { IContactAdd } from "../../interfaces/contact"

const updateContactService = async (clientId: string, contactId: string, contactData: IContactAdd) => {
    const clientRepository = AppDataSource.getRepository(Client)
    const contactRepository = AppDataSource.getRepository(Contact)

    const clientInstance = await clientRepository.findOne({
        where: {
            id: clientId
        }
    })

    if (!clientInstance) {
        throw new AppError("Client not found", 401)
    }

    const contactInstance = await contactRepository.findOne({
        where: {
            id: contactId
        }
    })

    if (!contactInstance) {
        throw new AppError("Contact not found", 401)
    }

    contactInstance.name = contactData.name ? contactData.name : contactInstance.name
    contactInstance.email = contactData.email ? contactData.email : contactInstance.email
    contactInstance.tel = contactData.tel ? contactData.tel : contactInstance.tel
    contactInstance.client = clientInstance

    const udpatedContact = await contactRepository.update(contactId, contactInstance)

    return udpatedContact
}

export default updateContactService