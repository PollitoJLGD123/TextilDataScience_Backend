// src/models/contrato.model.ts
import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Empleado } from './empleado.model';

@Table({ tableName: 'contrato', timestamps: false })
export class Contrato extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id_contrato!: number;

    @Column(DataType.DATE)
    fecha_inicio!: Date;

    @Column(DataType.DATE)
    fecha_fin!: Date;

    @Column(DataType.DECIMAL(10, 2))
    sueldo!: number;

    @Column(DataType.STRING(50))
    tipo_contrato!: string;

    @ForeignKey(() => Empleado)
    @Column
    id_empleado!: number;

    @BelongsTo(() => Empleado)
    empleado?: Empleado;
}
