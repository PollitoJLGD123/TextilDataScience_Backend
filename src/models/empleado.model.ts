import {
    Table,
    Column,
    Model,
    PrimaryKey,
    AutoIncrement,
    DataType,
    ForeignKey,
    BelongsTo,
    HasMany,
    HasOne,
} from 'sequelize-typescript';

import { Rol } from './rol.model';
import { User } from './user.model';
import { Venta } from './venta.model';
import { Asistencia } from './asistencia.model';
import { Contrato } from './contrato.model';
import { Horario } from './horario.model';
import { Nomina } from './nomina.model';

@Table({ tableName: 'empleado', timestamps: false })
export class Empleado extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id_empleado!: number;

    @Column(DataType.STRING(50))
    nombre!: string;

    @Column(DataType.STRING(50))
    apellido!: string;

    @Column({
        type: DataType.STRING,
        validate: {
            isEmail: true,
        }
    })
    email!: string;

    @Column(DataType.CHAR(9))
    telefono!: string;

    @Column(DataType.STRING(100))
    direccion!: string;

    @Column({
        type: DataType.CHAR(8),
        unique: true,
    })
    dni!: string;

    @ForeignKey(() => Rol)
    @Column
    id_rol!: number;

    @BelongsTo(() => Rol)
    rol?: Rol;

    @ForeignKey(() => User)
    @Column
    id_user!: number;

    @BelongsTo(() => User)
    User?: User;

    @HasMany(() => Venta)
    ventas?: Venta[];

    @HasMany(() => Asistencia)
    asistencias?: Asistencia[];

    @HasMany(() => Contrato)
    contratos?: Contrato[];

    @HasOne(() => Horario)
    horario?: Horario;

    @HasOne(() => Nomina)
    nomina?: Nomina;
}
