import bcrypt from 'bcrypt';
import { Request } from 'express';
import UserModel from '../models/user';
import { GenericCrudController } from './GenericCrudController';

const SALT_ROUNDS = 10 as const;

function generatePassword (plainTextPassword: string): string {
    const salt = bcrypt.genSaltSync(SALT_ROUNDS);

    return bcrypt.hashSync(plainTextPassword, salt);
}

// function checkPassword (plainTextPassword: string, hashedPassword: string) {
//     return bcrypt.compareSync(plainTextPassword, hashedPassword);
// }

class UserController extends GenericCrudController {
    createDataMapper (req: Request): unknown {
        const newData = { ...req.body };

        newData.password = generatePassword(newData.password);

        return newData;
    }
}

const controller = new UserController(UserModel, 'userId');

export default controller;
