import { Request } from 'express';

export interface RolRequest extends Request {

    body: {
        nombre: string; // STRING(100) en el modelo
    }
}