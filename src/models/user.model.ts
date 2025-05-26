import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, HasOne } from 'sequelize-typescript';
import { Empleado } from './empleado.model';

@Table({ tableName: 'user', timestamps: false })
export class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id_user!: number;

  @Column(DataType.STRING(50))
  nombre!: string;

  @Column(DataType.TEXT)
  email!: string;

  @Column(DataType.STRING(255))
  password!: string;

  @Column(DataType.TEXT)
  token?: string | null;

  @HasOne(() => Empleado)
  empleado?: Empleado;
}
