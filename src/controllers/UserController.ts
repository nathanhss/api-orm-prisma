import { Request, Response } from "express";
import { database } from "../database";
import bcrypt from "bcrypt";
import constants from "../utils/constants";

export class UserController {
    async createUser(request: Request, response: Response) {
        const {name, email, password} = request.body;
        const salt = await bcrypt.genSalt(Number(constants.SALT_ROUNDS));
        const encriptedPassword = await bcrypt.hash(password, salt);
        const user = await database.user.create({
            data: {
                name, 
                email,
                password: encriptedPassword
            }
        });

        return response.json({
            code: 200,
            data: user
        });
    }

    async findUserById(request: Request, response: Response){
        const {id} = request.params;
        const user = await database.user.findUnique({
            where: {
                id: Number(id)
            }
        });

        return response.json({
            code: 200,
            data: user
        });
    }

    async updateUserById(request: Request, response: Response){
        const {id, email, name} = request.body;
        const user = await database.user.update({
            data: {
                email,
                name
            },
            where: {
                id: Number(id)
            }
        });

        return response.json({
            code: 200,
            data: user
        });
    }

    async updatePasswordByEmail(request: Request, response: Response) {
        const {email, password} = request.body;

        const userData = await database.user.findUnique({
            where: {
                email
            }
        });

        if(!userData) {
            return response.json({
                code: 404,
                message: 'User not found'
            })
        }
        // const newPassword = await bcrypt.hash(password, String(constants.SALT));
        // if(!bcrypt.compare(userData.password, newPassword)) {
        //     return response.json(await database.user.update({ 
        //         data: {
        //             password: newPassword
        //         },
        //         where: {
        //             email
        //         }
        //     }));
        // }

        return response.json({
            code: 409,
            message: "Password is equals"
        })
        
    }
}

