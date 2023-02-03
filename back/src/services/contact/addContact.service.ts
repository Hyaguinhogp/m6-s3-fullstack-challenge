import AppDataSource from "../../data-source";
import { Client } from "../../entities/client";
import { Contact } from "../../entities/contact";
import { AppError } from "../../errors";
import { IContactAdd } from "../../interfaces/contact";

export default async function addContactService(clientId: string, contact: IContactAdd) {
    if (Object.keys(contact).length !== 3) {
        throw new AppError("Required field is missing")
    }

    let checkKeys = Object.keys(contact).map(
        item =>
            item.includes("name") ||
            item.includes("email") ||
            item.includes("tel")
    );

    if (checkKeys.includes(false)) {
        throw new AppError("Invalid key")
    }

    const clientRepository = AppDataSource.getRepository(Client)
    const ContactRepository = AppDataSource.getRepository(Contact)

    const clientInstance = await clientRepository.findOne({
        where: {
            id: clientId
        },
        relations: {
            contacts: true
        }
    })

    if (!clientInstance) {
        throw new AppError("User not found", 401)
    }

    const clientHasThisContact = clientInstance?.contacts.some((cont) => {
        return cont.email === contact.email ||
            cont.name === contact.name ||
            cont.tel === contact.tel
    })

    if (clientHasThisContact) {
        throw new AppError("Client already have this contact added", 404)
    }

    const contactInstance = new Contact()
    contactInstance.name = contact.name
    contactInstance.email = contact.email
    contactInstance.tel = contact.tel
    contactInstance.client = clientInstance

    ContactRepository.create(contactInstance)
    const newContact = await ContactRepository.save(contactInstance)

    clientInstance.contacts = [...clientInstance.contacts, contactInstance]
    clientRepository.save(clientInstance)

    console.log(clientInstance)
    console.log(contactInstance)
    console.log(newContact)

    return newContact
}