// src/models/asistencia.model.ts
import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Empleado } from './empleado.model';

@Table({ tableName: 'asistencia', timestamps: false })
export class Asistencia extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id_asistencia!: number;

    @Column(DataType.DATE)
    fecha!: Date;

    @Column(DataType.TIME)
    hora_entrada!: string;

    @Column(DataType.TIME)
    hora_salida!: string;

    @ForeignKey(() => Empleado)
    @Column
    id_empleado!: number;

    @BelongsTo(() => Empleado)
    empleado?: Empleado;
}
