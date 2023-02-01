import AppDataSource from "../../data-source";
import { Client } from "../../entities/client";
import { AppError } from "../../errors";
import { IClient, IContactAdd } from "../../interfaces/client";

export default async function getClientService(clientId: string) {
    const repository = AppDataSource.getRepository(Client)
    const client = await repository.find({
        where: {
            id: clientId
        },
        relations: {
            contacts: true
        }
    })
    return client
}