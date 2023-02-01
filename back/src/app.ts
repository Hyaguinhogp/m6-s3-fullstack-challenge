import "reflect-metadata";
import "express-async-errors";
import express from "express";
import clientRoutes from "./routes/client.routes";
import checkErrorMiddleware from "./middlewares/checkErrors.middleware";

const app = express();
app.use(express.json());
app.use("/clients", clientRoutes)

app.use(checkErrorMiddleware)

export default app;