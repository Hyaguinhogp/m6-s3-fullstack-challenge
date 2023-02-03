import { Request, Response } from "express";
import { IContactAdd } from "../interfaces/contact";
import addContactService from "../services/contact/addContact.service";
import deleteContactService from "../services/contact/deleteContact.service";
import updateContactService from "../services/contact/updateContact.service";

async function addContactController(req: Request, res: Response) {
    const contact: IContactAdd = req.body
    const newContact = await addContactService(req.user.id, contact)
    return res.status(200).json({ data: "Contact added" })
}

async function updateContactController(req: Request, res: Response) {
    const contactId: string = req.params.id
    const contact: IContactAdd = req.body
    const newContact = await updateContactService(req.user.id, contactId, contact)
    return res.status(200).json({ data: "Contact updated" })
}

async function deleteContactController(req: Request, res: Response) {
    const contactId: string = req.params.id
    const newContact = await deleteContactService(req.user.id, contactId)
    return res.status(200).json({ data: "Contact deleted" })
}

export {
    addContactController,
    deleteContactController,
    updateContactController,
};
