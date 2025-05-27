import { Request } from 'express';

export interface ContratoRequest extends Request {
    body: {
        fecha_inicio: Date;
        fecha_fin: Date;
        sueldo: number;
        tipo_contrato: string;
        id_empleado: number;
    };
}
