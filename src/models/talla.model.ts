import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, HasMany  } from 'sequelize-typescript';
import { Prenda } from './prenda.model';

@Table({ tableName: 'talla', timestamps: false })
export class Talla extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id_talla!: number;

    @Column(DataType.STRING(50))
    nombre!: string;

    @HasMany(() => Prenda)
    prendas?: Prenda[];
}
