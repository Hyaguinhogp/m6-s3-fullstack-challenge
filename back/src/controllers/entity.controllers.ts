import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { Client } from "../entities/client";
import { IClientCreate, IClientLogin } from "../interfaces/client/index";
import createClientService from "../services/client/createClient.service";
import deleteClientService from "../services/client/deleteClient.service";
import getClientService from "../services/client/getClient.service";
import listClientsService from "../services/client/listClients.service";
import updateClientService from "../services/client/updateClient.service";
import loginService from "../services/login/login.service";

async function createClientController(req: Request, res: Response) {
    const client: IClientCreate = req.body;
    const newClient = await createClientService(client);
    return res.status(201).json({ data: instanceToPlain(newClient) });
}

async function loginController(req: Request, res: Response) {
    const contact: IClientLogin = req.body;
    const token = await loginService(contact);
    return res.status(200).json({ token: token });
}

async function listClientsController(req: Request, res: Response) {
    const clients: Client[] = await listClientsService();
    return res.status(200).json({ data: instanceToPlain(clients) });
}

async function getClientController(req: Request, res: Response) {
    const client: Client = await getClientService(req.user.id);
    return res.status(200).json({ data: instanceToPlain(client) });
}

async function updateClientController(req: Request, res: Response) {
    const updatedClient = await updateClientService(req.user.id, req.body)
    return res.status(200).json({ data: instanceToPlain(updatedClient) });
}

async function deleteClientController(req: Request, res: Response) {
    await deleteClientService(req.user.id)
    return res.status(204).json();
}

export {
    createClientController,
    loginController,
    listClientsController,
    deleteClientController,
    updateClientController,
    getClientController
};
