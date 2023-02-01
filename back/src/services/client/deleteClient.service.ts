import AppDataSource from "../../data-source";
import { Client } from "../../entities/client";

export default async function deleteClientService(clientId: string) {
    const repository = AppDataSource.getRepository(Client)
    repository.delete({ id: clientId })
    return null
}