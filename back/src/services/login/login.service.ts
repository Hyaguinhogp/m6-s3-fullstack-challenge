import "dotenv/config";
import jwt from "jsonwebtoken";
import AppDataSource from "../../data-source";
import { Client } from "../../entities/client";
import { AppError } from "../../errors";
import { IClientLogin } from "../../interfaces/client";

export default async function loginService(client: IClientLogin) {
    let checkKeys = Object.keys(client).map(
        item => item.includes("email")
    );

    if (checkKeys.includes(false)) {
        throw new AppError("Invalid key");
    }

    const dataClient = AppDataSource.getRepository(Client);

    const clientExists = await dataClient.findOneBy({
        email: client.email,
    });

    if (!clientExists) {
        throw new AppError("Invalid client", 403);
    }

    const token = jwt.sign(
        {},
        process.env.SECRET_KEY as string,
        {
            expiresIn: "24h",
            subject: clientExists.id,
        }
    );

    return token;
}