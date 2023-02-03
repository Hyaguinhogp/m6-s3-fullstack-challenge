import AppDataSource from "../../data-source";
import { Client } from "../../entities/client";
import { Contact } from "../../entities/contact";
import { AppError } from "../../errors";

export default async function deleteContactService(clientId: string, contactId: string) {
    const clientRepository = AppDataSource.getRepository(Client)
    const contactRepository = AppDataSource.getRepository(Contact)

    const clientInstance = await clientRepository.findOne({
        where: {
            id: clientId
        },
        relations: {
            contacts: true
        }
    })

    if (!clientInstance) {
        throw new AppError("Contact not found")
    }

    const contactInstance = await contactRepository.findOne({
        where: {
            id: contactId
        }
    })

    if (!contactInstance) {
        throw new AppError("Contact not found")
    }

    clientInstance.contacts = clientInstance.contacts.filter((contact) => contact.id !== contactId)
    clientRepository.save(clientInstance)

    contactRepository.delete(contactInstance)

    return clientInstance
}