import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Entrada } from './entrada.model';
import { Prenda } from './prenda.model';

@Table({ tableName: 'detalle_entrada', timestamps: false })
export class DetalleEntrada extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id_detalle_entrada!: number;

    @ForeignKey(() => Entrada)
    @Column
    id_entrada!: number;

    @BelongsTo(() => Entrada)
    entrada?: Entrada;

    @ForeignKey(() => Prenda)
    @Column
    id_prenda!: number;

    @BelongsTo(() => Prenda)
    prenda?: Prenda;

    @Column(DataType.INTEGER)
    cantidad!: number;

    @Column(DataType.DECIMAL(10, 2))
    precio_compra!: number;
}
