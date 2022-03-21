import {
    Table,
    Column,
    Model,
    CreatedAt,
    UpdatedAt,
    DeletedAt,
    BelongsTo,
    HasMany,
    DataType,
    AllowNull,
    Default,
    ForeignKey,
} from "sequelize-typescript";
import Client from "./client";
import History from "./history";
import Race from "./race";
import Species from "./species";

@Table
class Pet extends Model {
    @Column
    name!: string;

    @Default("")
    @Column
    alergies!: string;

    @AllowNull
    @Column(DataType.ENUM("male", "female"))
    genre!: string;

    @AllowNull
    @Column
    birthday!: Date;

    @Column
    donor!: boolean;

    @Column
    blood_type!: string;

    @Column(DataType.ENUM("dead", "alive"))
    status!: string;

    @ForeignKey(() => Species)
    @Column
    species_id!: number;

    @BelongsTo(() => Species)
    species!: Species;

    @ForeignKey(() => Race)
    @AllowNull
    @Column
    race_id!: number;

    @BelongsTo(() => Race)
    race!: Race;

    @ForeignKey(() => Client)
    @Column
    client_id!: number

    @BelongsTo(() => Client)
    client!: Client;

    @HasMany(() => History)
    histories!: History[];

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

export default Pet;
