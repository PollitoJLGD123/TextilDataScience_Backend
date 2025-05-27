import { Request } from 'express';

export interface EmpleadoRequest extends Request {
    body: {
        nombre: string;
        apellido: string;
        email: string;
        telefono: string;
        direccion: string;
        dni: string;
        id_rol: number; // ForeignKey a Rol
        id_user?: number; // Opcional si se asigna después
    }
}