import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Venta } from './venta.model';
import { Prenda } from './prenda.model';

@Table({ tableName: 'detalle_venta', timestamps: false })
export class DetalleVenta extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id_detalle_venta!: number;

    @ForeignKey(() => Venta)
    @Column
    id_venta!: number;

    @BelongsTo(() => Venta)
    venta?: Venta;

    @ForeignKey(() => Prenda)
    @Column
    id_prenda!: number;

    @BelongsTo(() => Prenda)
    prenda?: Prenda;

    @Column(DataType.INTEGER)
    cantidad!: number;

    @Column(DataType.DECIMAL(10, 2))
    precio!: number;
}
