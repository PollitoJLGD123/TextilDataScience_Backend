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
export class Boleta extends Model<Comprobante> {
    @PrimaryKey
    @ForeignKey(() => Comprobante)
    @Column({ field: 'id_comprobante', type: DataType.BIGINT })
    id_comprobante!: number;

    @BelongsTo(() => Comprobante)
    comprobante?: Comprobante;
}
