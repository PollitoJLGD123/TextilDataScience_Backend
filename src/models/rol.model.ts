// src/models/rol.model.ts
import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, HasMany } from 'sequelize-typescript';
import { Empleado } from './empleado.model';

@Table({ tableName: 'rol', timestamps: false })
export class Rol extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id_rol!: number;

    @Column(DataType.STRING(100))
    nombre!: string;

    @HasMany(() => Empleado)
    empleados?: Empleado[];
}
