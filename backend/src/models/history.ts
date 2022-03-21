import {
    Table,
    Column,
    Model,
    CreatedAt,
    UpdatedAt,
    DeletedAt,
    BelongsTo,
    HasMany,
    ForeignKey,
} from "sequelize-typescript";
import Pet from "./pet";
import Image from "./image";

@Table
class History extends Model<History> {
    @Column
    observation!: string;

    @ForeignKey(() => Pet)
    @Column
    pet_id!: number;

    @BelongsTo(() => Pet)
    pet!: Pet;

    @HasMany(() => Image)
    images!: Image[];

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

export default History;
