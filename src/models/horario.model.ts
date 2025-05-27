// src/models/horario.model.ts
import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Empleado } from './empleado.model';

@Table({ tableName: 'horario', timestamps: false })
export class Horario extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id_horario!: number;

    @Column(DataType.TIME)
    hora_inicio!: string;

    @Column(DataType.TIME)
    hora_fin!: string;

    @Column(DataType.STRING(50))
    dias!: string; // Ej: "Lunes-Viernes"

    @ForeignKey(() => Empleado)
    @Column
    id_empleado!: number;

    @BelongsTo(() => Empleado)
    empleado?: Empleado;
}
