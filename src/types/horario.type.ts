import { Request } from 'express';

export interface HorarioRequest extends Request {
    body: {
        hora_inicio: string;
        hora_fin: string;
        dias: string;
        id_empleado: number;
    };
}
