import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, HasMany } from 'sequelize-typescript';
import { Prenda } from './prenda.model';

@Table({ tableName: 'categoria', timestamps: false })
export class Categoria extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id_categoria!: number;

    @Column(DataType.STRING(50))
    nombre!: string;

    @HasMany(() => Prenda)
    prendas?: Prenda[];
}
