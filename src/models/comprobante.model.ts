import {
    Table,
    Column,
    Model,
    PrimaryKey,
    AutoIncrement,
    DataType,
    ForeignKey,
    BelongsTo,
    HasOne,
    CreatedAt,
} from 'sequelize-typescript';
import { Cliente } from './cliente.model';
import { Empleado } from './empleado.model';
import { Boleta } from './boleta.model';
import { Factura } from './factura.model';

@Table({ tableName: 'comprobante', timestamps: false })
export class Comprobante extends Model<Comprobante> {
    @PrimaryKey
    @AutoIncrement
    @Column({ field: 'id_comprobante', type: DataType.BIGINT })
    id_comprobante!: number;

    @CreatedAt
    @Column({ field: 'fecha_emision', type: DataType.DATE })
    fecha_emision!: Date;

    @ForeignKey(() => Cliente)
    @Column({ field: 'id_cliente', type: DataType.BIGINT })
    id_cliente!: number;

    @ForeignKey(() => Empleado)
    @Column({ field: 'id_empleado', type: DataType.BIGINT })
    id_empleado!: number;

    @Column({
        type: DataType.STRING(20),
        allowNull: false,
        validate: {
            isIn: [['boleta', 'factura']],
        },
    })
    tipo!: 'boleta' | 'factura';

    @Column({ type: DataType.DECIMAL(12, 2), allowNull: false })
    total!: number;

    @BelongsTo(() => Cliente)
    cliente?: Cliente;

    @BelongsTo(() => Empleado)
    empleado?: Empleado;

    @HasOne(() => Boleta)
    boleta?: Boleta;

    @HasOne(() => Factura)
    factura?: Factura;
}
