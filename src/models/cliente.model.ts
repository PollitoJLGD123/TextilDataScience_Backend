import {
    Table,
    Column,
    Model,
    PrimaryKey,
    AutoIncrement,
    DataType,
    HasOne,
    CreatedAt,
} from 'sequelize-typescript';
import { ClienteNatural } from './clienteNatural.model';
import { ClienteJuridico } from './clienteJuridico.model';

@Table({ tableName: 'cliente', timestamps: false })
export class Cliente extends Model<Cliente> {
    @PrimaryKey
    @AutoIncrement
    @Column({ field: 'id_cliente', type: DataType.BIGINT })
    id_cliente!: number;

    @Column({
        type: DataType.STRING(20),
        allowNull: false,
        validate: {
            isIn: [['juridico', 'natural']],
        },
    })
    tipo!: 'juridico' | 'natural';

    @Column({ type: DataType.STRING(255), allowNull: false, unique: true })
    correo!: string;

    @Column(DataType.STRING(20))
    telefono!: string;

    @Column(DataType.STRING(255))
    direccion!: string;

    @CreatedAt
    @Column({ field: 'creado_en', type: DataType.DATE })
    creado_en!: Date;

    @HasOne(() => ClienteNatural)
    cliente_natural?: ClienteNatural;

    @HasOne(() => ClienteJuridico)
    cliente_juridico?: ClienteJuridico;
}
