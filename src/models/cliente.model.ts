// src/models/Cliente.ts
import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, HasMany } from 'sequelize-typescript';
import { Venta } from './venta.model';

@Table({ tableName: 'cliente', timestamps: false })
export class Cliente extends Model<Cliente> {
    @PrimaryKey
    @AutoIncrement
    @Column
    id_cliente!: number;

    @Column(DataType.STRING(50))
    nombre!: string;

    @Column(DataType.STRING(50))
    apellido!: string;

    @Column({
        type: DataType.STRING,
        validate: {
            isEmail: true,
        }
    })
    email!: string;

    @Column( DataType.CHAR(9))
    telefono!: string;

    @Column(DataType.STRING(100))
    direccion!: string;

    @Column({
        type: DataType.CHAR(8),
        unique: true,
    })
    dni!: string;

    @HasMany(() => Venta)
    ventas?: Venta[];
}
