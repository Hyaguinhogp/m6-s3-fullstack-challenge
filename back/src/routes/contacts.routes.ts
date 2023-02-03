import { Router } from "express";
import { addContactController, deleteContactController, updateContactController } from "../controllers/contact.controllers";
import checkAuthUserMiddleware from "../middlewares/checkAuthUser.middleware";

const contactRoutes = Router();

contactRoutes.post("/add", checkAuthUserMiddleware, addContactController);
contactRoutes.delete("/:id", checkAuthUserMiddleware, deleteContactController);
contactRoutes.patch("/:id", checkAuthUserMiddleware, updateContactController);

export default contactRoutes;