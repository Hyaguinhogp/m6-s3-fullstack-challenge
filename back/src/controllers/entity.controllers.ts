import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import createClientService from "../services/client/createClient.service";
import { IClient, IClientCreate, IClientLogin, IContactAdd } from "../interfaces/client/index";
import addContactService from "../services/client/addContact.service";
import loginService from "../services/login/login.service";
import { Client } from "../entities/client";
import listClientsService from "../services/client/listClients.service";
import deleteClientService from "../services/client/deleteClient.service";
import updateClientService from "../services/client/updateClient.service";
import getClientService from "../services/client/getClient.service";

async function createClientController(req: Request, res: Response) {
    const client: IClientCreate = req.body;
    const newClient = await createClientService(client);
    return res.status(201).json({ data: instanceToPlain(newClient) });
}

async function addContactController(req: Request, res: Response) {
    const contact: IContactAdd = req.body;
    const newContact = await addContactService(req.user.id, contact);
    return res.status(200).json({ data: "Contact added" });
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
    const client: Client[] = await getClientService(req.user.id);
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
    addContactController,
    loginController,
    listClientsController,
    deleteClientController,
    updateClientController,
    getClientController
};