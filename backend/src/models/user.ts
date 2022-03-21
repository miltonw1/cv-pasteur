import { Table, Column, Model, CreatedAt, UpdatedAt, DeletedAt  } from 'sequelize-typescript'

@Table
class User extends Model {
    @Column
    name!: string

    @Column
    username!: string

    @Column
    email!: string

    @Column
    password!: string

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

export default User
