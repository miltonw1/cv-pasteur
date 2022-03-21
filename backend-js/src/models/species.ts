import { Table, Column, Model, HasMany } from 'sequelize-typescript'
import Race from './race'

@Table
class Species extends Model<Species> {
    @Column
    name!: string

    @HasMany(() => Race)
    races!: Race
}

export default Species
