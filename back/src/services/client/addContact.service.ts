import AppDataSource from "../../data-source";
import { Client } from "../../entities/client";
import { AppError } from "../../errors";
import { IContactAdd } from "../../interfaces/client";

export default async function addContactService(clientId: string, contact: IContactAdd) {
    if (Object.keys(contact).length !== 1) {
        throw new AppError("Required field is missing")
    }

    let checkKeys = Object.keys(contact).map(
        item =>
            item.includes("email")
    );

    if (checkKeys.includes(false)) {
        throw new AppError("Invalid key")
    }

    const repository = AppDataSource.getRepository(Client)

    const clientInstance = await repository.findOne({
        where: {
            id: clientId
        },
        relations: {
            contacts: true
        }
    })

    const contactInstance = await repository.findOne({
        where: {
            email: contact.email
        },
        relations: {
            contacts: true
        }
    })

    console.log(clientInstance)
    console.log(contactInstance)

    if (!contactInstance || !clientInstance) {
        throw new AppError("Contact not found")
    }

    clientInstance.contacts = [...clientInstance.contacts, contactInstance]
    await repository.save(clientInstance)
}