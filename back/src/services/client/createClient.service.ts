import AppDataSource from "../../data-source";
import { Client } from "../../entities/client";
import { AppError } from "../../errors";
import { IClientCreate } from "../../interfaces/client";

export default async function createClientService(client: IClientCreate) {
    if (Object.keys(client).length !== 3) {
        throw new AppError("Required field is missing");
    }

    let checkKeys = Object.keys(client).map(
        item =>
            item.includes("name") ||
            item.includes("email") ||
            item.includes("tel")
    );

    if (checkKeys.includes(false)) {
        throw new AppError("Invalid key");
    }

    const clientData = AppDataSource.getRepository(Client);

    const clients = await clientData.find({
        select: {
            email: true
        }
    })


    const clientExists = clients.some(clientTest => clientTest.email === client.email);

    if (clientExists) {
        throw new AppError("This email is already registered");
    }

    const newDate = new Date();

    const newClient = clientData.create({
        name: client.name,
        email: client.email,
        tel: client.tel,
        createdAt: newDate,
    });

    await clientData.save(newClient);

    return newClient;
}