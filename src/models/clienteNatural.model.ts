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

@Table({ tableName: 'cliente_natural', timestamps: false })
export class ClienteNatural extends Model<Cliente> {
    @PrimaryKey
    @ForeignKey(() => Cliente)
    @Column({ field: 'id_cliente', type: DataType.BIGINT })
    id_cliente!: number;

    @Column({ type: DataType.STRING(100), allowNull: false })
    nombre!: string;

    @Column({ type: DataType.STRING(100), allowNull: false })
    apellido!: string;

    @Column({ type: DataType.CHAR(8), allowNull: false, unique: true })
    dni!: string;

    @Column({ field: 'fecha_nac', type: DataType.DATE })
    fecha_nac?: Date;

    @BelongsTo(() => Cliente)
    cliente?: Cliente;
}
