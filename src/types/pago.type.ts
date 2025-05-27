import { Request } from 'express';

export interface PagoRequest extends Request {
    body: {
        fecha_pago: Date;
        monto: number;
        metodo_pago: string;
        id_nomina: number;
    };
}
