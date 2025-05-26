import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { Categoria } from './categoria.model';
import { Marca } from './marca.model';
import { Proveedor } from './proveedor.model';
import { DetalleVenta } from './detalleVenta.model';
import { DetalleEntrada } from './detalleEntrada.model';
import { Talla } from './talla.model';
import { DetallePedido } from './detallePedido.model';

@Table({ tableName: 'prenda', timestamps: false })
export class Prenda extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id_prenda!: number;

    @Column(DataType.STRING(50))
    nombre_prenda!: string;

    @Column(DataType.STRING(255))
    descripcion!: string;

    @Column(DataType.DECIMAL(10, 2))
    precio!: number;

    @Column(DataType.INTEGER)
    stock!: number;

    @ForeignKey(() => Categoria)
    @Column
    id_categoria!: number;

    @BelongsTo(() => Categoria)
    categoria?: Categoria;

    @ForeignKey(() => Marca)
    @Column
    id_marca!: number;

    @BelongsTo(() => Marca)
    marca?: Marca;

    @ForeignKey(() => Talla)
    @Column
    id_talla!: number;

    @BelongsTo(() => Marca)
    talla?: Talla;

    @ForeignKey(() => Proveedor)
    @Column
    id_proveedor?: number;

    @BelongsTo(() => Proveedor)
    proveedor?: Proveedor;

    @HasMany(() => DetalleVenta)
    detallesVenta?: DetalleVenta[];

    @HasMany(() => DetalleEntrada)
    detallesEntrada?: DetalleEntrada[];

    @HasMany(() => DetallePedido)
    detallesPedido?: DetallePedido[];
}
