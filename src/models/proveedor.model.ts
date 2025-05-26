import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, HasMany } from 'sequelize-typescript';
import { Prenda } from './prenda.model';
import { Entrada } from './entrada.model';
import { PedidoProveedor } from './pedidoProveedor.model';

@Table({ tableName: 'proveedor', timestamps: false })
export class Proveedor extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id_proveedor!: number;

    @Column(DataType.STRING(50))
    nombre!: string;

    @Column(DataType.STRING(50))
    apellido!: string;

    @Column(DataType.TEXT)
    email!: string;

    @Column(DataType.STRING(9))
    telefono!: string;

    @Column(DataType.STRING(100))
    direccion!: string;

    @Column(DataType.STRING(8))
    dni!: string;

    @HasMany(() => Prenda)
    prendas?: Prenda[];

    @HasMany(() => Entrada)
    entradas?: Entrada[];

    @HasMany(() => PedidoProveedor)
    pedidosProveedor?: PedidoProveedor[];
}
