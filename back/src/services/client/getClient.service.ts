import AppDataSource from "../../data-source";
import { Client } from "../../entities/client";

export default async function getClientService(clientId: string) {
    const repository = AppDataSource.getRepository(Client)
    const client = await repository.findOne({
        where: {
            id: clientId
        },
        relations: {
            contacts: true
        }
    })
    return client!
}