
export interface Cliente {
    id_cliente: number;
    tipo: string;
    email: string;
    telefono: string;
    direccion: string;
    creado_en: Date;
    cliente_natural?: ClienteNatural;
    cliente_juridico?: ClienteJuridico;
}

export interface ClienteNatural {
    id_cliente_natural: number;
    nombre: string;
    apellido: string;
    dni: string;
    fecha_nac: Date;
}

export interface ClienteJuridico {
    id_cliente_juridico: number;
    ruc: string;
    razon_social: string;
}