import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { Cliente } from './cliente.model';
import { Empleado } from './empleado.model';
import { DetalleVenta } from './detalleVenta.model';

@Table({ tableName: 'venta', timestamps: false })
export class Venta extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id_venta!: number;

    @Column(DataType.DATE)
    fecha_venta!: Date;

    @Column(DataType.DECIMAL(10, 2))
    total!: number;

    @Column(DataType.STRING)
    metodo_pago!: string;

    @ForeignKey(() => Cliente)
    @Column
    id_cliente!: number;

    @BelongsTo(() => Cliente)
    cliente?: Cliente;

    @ForeignKey(() => Empleado)
    @Column
    id_empleado!: number;

    @BelongsTo(() => Empleado)
    empleado?: Empleado;

    @HasMany(() => DetalleVenta)
    detalles_venta?: DetalleVenta[];
}
