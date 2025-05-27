import { Request } from 'express';
export interface UserRequest extends Request{
    body:{
        nombre: string;
        apellido: string;
        email: string;
        telefono: string;
        direccion: string;
        dni: string;
        password: string;
    }
}
