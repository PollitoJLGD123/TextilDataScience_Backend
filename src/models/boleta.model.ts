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

@Table({ tableName: 'boleta', timestamps: false })
export class Boleta extends Model<Boleta> {
    @PrimaryKey
    @ForeignKey(() => Comprobante)
    @Column({ field: 'id_comprobante', type: DataType.BIGINT })
    id_comprobante!: number;

    @Column({ type: DataType.CHAR(4), allowNull: false })
    serie!: string;

    @Column({ type: DataType.INTEGER, allowNull: false })
    numero!: number;

    @BelongsTo(() => Comprobante)
    comprobante?: Comprobante;
}
