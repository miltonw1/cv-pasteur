import { Table, Column, Model, BelongsTo, ForeignKey } from 'sequelize-typescript'
import Species from './species'

@Table
class Race extends Model<Race> {
    @Column
    name!: string

    @ForeignKey(() => Species)
    @Column
    species_id!: number;

    @BelongsTo(() => Species)
    species!: Species
}

export default Race
