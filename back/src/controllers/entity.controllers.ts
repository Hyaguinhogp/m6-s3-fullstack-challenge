import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import createClientService from "../services/client/createClient.service";
import { IClientCreate } from "../interfaces/client/index";

async function createClientController(req: Request, res: Response) {
    const client: IClientCreate = req.body;
    const newClient = await createClientService(client);
    return res.status(201).json({ data: instanceToPlain(newClient) });
}

export {
    createClientController,
};