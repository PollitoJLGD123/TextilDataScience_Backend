import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, HasMany } from 'sequelize-typescript';
import { Prenda } from './prenda.model';

@Table({ tableName: 'marca', timestamps: false })
export class Marca extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id_marca!: number;

    @Column(DataType.STRING(50))
    nombre!: string;

    @HasMany(() => Prenda)
    prendas?: Prenda[];
}
