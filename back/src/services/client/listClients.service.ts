import AppDataSource from "../../data-source";
import { Client } from "../../entities/client";

export default async function listClientsService() {
    const repository = AppDataSource.getRepository(Client)
    const clients = await repository.find({
        relations: {
            contacts: true
        }
    })
    return clients
}