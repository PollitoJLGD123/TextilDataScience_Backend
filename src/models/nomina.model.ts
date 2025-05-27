// src/models/nomina.model.ts
import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { Empleado } from './empleado.model';
import { Pago } from './pago.model';

@Table({ tableName: 'nomina', timestamps: false })
export class Nomina extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id_nomina!: number;

    @Column(DataType.INTEGER)
    mes!: number;

    @Column(DataType.INTEGER)
    anio!: number;

    @Column(DataType.DECIMAL(10, 2))
    total!: number;

    @ForeignKey(() => Empleado)
    @Column
    id_empleado!: number;

    @BelongsTo(() => Empleado)
    empleado?: Empleado;

    @HasMany(() => Pago)
    pagos?: Pago[];
}
