import { Table, Column, Model, HasMany, CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript'
import Pet from './pet'

@Table
class Client extends Model<Client> {
    @Column
    name!: string

    @Column
    phone!: string

    @Column
    email!: string

    @Column
    address!: string

    @Column
    city!: string

    @Column
    debt!: string

    @HasMany(() => Pet)
    pets!: Pet[]

    @CreatedAt
    @Column
    createdAt!: Date;

    @UpdatedAt
    @Column
    updatedAt!: Date;

    @DeletedAt
    @Column
    deletedAt!: Date;
}

export default Client
