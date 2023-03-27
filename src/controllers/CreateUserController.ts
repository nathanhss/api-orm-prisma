import { Request, Response } from "express";
import { database } from "../database";

export class CreateUserController {
    async handle(request: Request, response: Response) {
        const {name, email} = request.body;

        const user = await database.user.create({
            data: {name, email}
        });

        return response.json(user);
    }
}

