import { Request } from 'express';

export interface NominaRequest extends Request {
    body: {
        mes: number;
        year: number;
        total: number;
        id_empleado: number;
    };
}
