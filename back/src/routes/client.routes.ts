import { Router } from "express";
import { addContactController, createClientController, deleteClientController, getClientController, listClientsController, loginController, updateClientController } from "../controllers/entity.controllers";
import checkAuthUserMiddleware from "../middlewares/checkAuthUser.middleware";

const clientRoutes = Router();

clientRoutes.get("", listClientsController);
clientRoutes.get("/self", checkAuthUserMiddleware, getClientController);
clientRoutes.post("", createClientController);
clientRoutes.post("/login", loginController);
clientRoutes.delete("", checkAuthUserMiddleware, deleteClientController);
clientRoutes.patch("", checkAuthUserMiddleware, updateClientController);

export default clientRoutes;