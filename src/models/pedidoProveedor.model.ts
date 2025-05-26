import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, HasMany, HasOne, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { DetallePedido } from './detallePedido.model';
import { ReclamacionPedido } from './reclamacionPedido.model';
import { Proveedor } from './proveedor.model';

@Table({ tableName: 'pedido_proveedor', timestamps: false })
export class PedidoProveedor extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id_pedido_proveedor!: number;

    @Column(DataType.DATE)
    fecha_pedido!: Date;

    @Column(DataType.STRING(50))
    estado!: string;

    @HasMany(() => DetallePedido)
    detalles_pedidos?: DetallePedido[];

    @HasOne(() => ReclamacionPedido)
    reclamacionPedido?: ReclamacionPedido;

    @ForeignKey(() => Proveedor)
    @Column
    id_proveedor!: number;

    @BelongsTo(() => Proveedor)
    proveedor?: Proveedor;
}