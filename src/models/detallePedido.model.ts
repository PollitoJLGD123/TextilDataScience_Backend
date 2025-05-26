import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';

import { PedidoProveedor } from './pedidoProveedor.model';
import { Prenda } from './prenda.model';

@Table({ tableName: 'detalle_pedido', timestamps: false })
export class DetallePedido extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id_detalle_pedido!: number;

    @Column(DataType.INTEGER)
    cantidad!: number;

    @ForeignKey(() => PedidoProveedor)
    @Column
    id_pedido_proveedor!: number;

    @BelongsTo(() => PedidoProveedor)
    pedidoProveedor?: PedidoProveedor;

    @ForeignKey(() => Prenda)
    @Column
    id_prenda!: number;

    @BelongsTo(() => Prenda)
    prenda?: Prenda;
}