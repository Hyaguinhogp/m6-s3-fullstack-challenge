import "reflect-metadata";
import "express-async-errors";
import express from "express";
import clientRoutes from "./routes/client.routes";
import checkErrorMiddleware from "./middlewares/checkErrors.middleware";
import contactRoutes from "./routes/contacts.routes";
const cors = require('cors');


const app = express();
app.use(express.json());
app.use(cors())

app.use("/clients", clientRoutes)
app.use("/contacts", contactRoutes)

app.use(checkErrorMiddleware)

export default app;