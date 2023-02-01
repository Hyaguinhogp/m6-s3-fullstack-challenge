import AppDataSource from "../../data-source";
import { Client } from "../../entities/client";
import { AppError } from "../../errors";
import { IClientCreate } from "../../interfaces/client";

export default async function updateClientService(clientId: string, clientUpdate: IClientCreate) {
    const repository = AppDataSource.getRepository(Client)
    const client = await repository.findOne({
        where: {
            id: clientId
        }
    })

    client!.name = clientUpdate.name ? clientUpdate.name : client!.name
    client!.email = clientUpdate.email ? clientUpdate.email : client!.email
    client!.tel = clientUpdate.tel ? clientUpdate.tel : client!.tel

    const updatedClient = repository.save(client!)

    return updatedClient;
}