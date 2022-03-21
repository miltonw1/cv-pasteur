import { Table, Column, Model, BelongsTo, ForeignKey } from 'sequelize-typescript'
import History from './history'

@Table
class Image extends Model<Image> {
    @Column
    url!: string

    @Column
    path!: string

    @ForeignKey(() => History)
    @Column
    history_id!: number;

    @BelongsTo(() => History)
    history!: History
}

export default Image
