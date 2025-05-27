// src/models/pago.model.ts
import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Nomina } from './nomina.model';

@Table({ tableName: 'pago', timestamps: false })
export class Pago extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id_pago!: number;

    @Column(DataType.DATE)
    fecha_pago!: Date;

    @Column(DataType.DECIMAL(10, 2))
    monto!: number;

    @Column(DataType.STRING(50))
    metodo_pago!: string;

    @ForeignKey(() => Nomina)
    @Column
    id_nomina!: number;

    @BelongsTo(() => Nomina)
    nomina?: Nomina;
}
