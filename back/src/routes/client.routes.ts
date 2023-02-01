import { Router } from "express";
import { createClientController } from "../controllers/entity.controllers";

const clientRoutes = Router();

clientRoutes.post("", createClientController);

export default clientRoutes;