import {
    Table,
    Column,
    Model,
    PrimaryKey,
    DataType,
    ForeignKey,
    BelongsTo,
} from 'sequelize-typescript';
import { Comprobante } from './comprobante.model';

@Table({ tableName: 'factura', timestamps: false })
export class Factura extends Model<Comprobante> {
    @PrimaryKey
    @ForeignKey(() => Comprobante)
    @Column({ field: 'id_comprobante', type: DataType.BIGINT })
    id_comprobante!: number;

    @Column({ field: 'ruc_emisor', type: DataType.CHAR(11), allowNull: false })
    ruc_emisor!: string;

    @BelongsTo(() => Comprobante)
    comprobante?: Comprobante;
}
