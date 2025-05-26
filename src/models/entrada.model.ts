import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, ForeignKey, HasMany, BelongsTo } from 'sequelize-typescript';
import { Proveedor } from './proveedor.model';
import { DetalleEntrada } from './detalleEntrada.model';

@Table({ tableName: 'entrada', timestamps: false })
export class Entrada extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id_entrada!: number;

    @Column(DataType.DATE)
    fecha!: Date;

    @ForeignKey(() => Proveedor)
    @Column
    id_proveedor!: number;

    @BelongsTo(() => Proveedor)
    proveedor?: Proveedor;

    @HasMany(() => DetalleEntrada)
    detalles?: DetalleEntrada[];
}
