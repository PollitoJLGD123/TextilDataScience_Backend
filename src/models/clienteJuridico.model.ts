import {
    Table,
    Column,
    Model,
    PrimaryKey,
    DataType,
    ForeignKey,
    BelongsTo,
} from 'sequelize-typescript';
import { Cliente } from './cliente.model';

@Table({ tableName: 'cliente_juridico', timestamps: false })
export class ClienteJuridico extends Model<ClienteJuridico> {
    @PrimaryKey
    @ForeignKey(() => Cliente)
    @Column({ field: 'id_cliente', type: DataType.BIGINT })
    id_cliente!: number;

    @Column({ type: DataType.CHAR(11), allowNull: false, unique: true })
    ruc!: string;

    @Column({ field: 'razon_social', type: DataType.STRING(255), allowNull: false })
    razon_social!: string;

    @BelongsTo(() => Cliente)
    cliente?: Cliente;
}
