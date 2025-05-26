import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { PedidoProveedor } from './pedidoProveedor.model';

@Table({ tableName: 'reclamacion_pedido', timestamps: false })
export class ReclamacionPedido extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id_reclamacion_pedido!: number;

    @Column(DataType.STRING(400))
    motivo!: string;

    @Column(DataType.DATE)
    fecha_reclamacion!: Date;

    @Column(DataType.BOOLEAN)
    estado!: boolean;

    @ForeignKey(() => PedidoProveedor)
    @Column
    id_pedido_proveedor!: number;

    @BelongsTo(() => PedidoProveedor)
    pedidoProveedor?: PedidoProveedor;
}
