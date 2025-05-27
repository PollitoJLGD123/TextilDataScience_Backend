import { Request } from 'express';

export interface AsistenciaRequest extends Request {
    body: {
        fecha: Date;
        hora_entrada: string;
        hora_salida: string;
        id_empleado: number;
    };
}
