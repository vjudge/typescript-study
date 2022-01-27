import {
    Table,
    Column,
    Model,
    Unique,
    IsEmail,
    DataType,
    CreatedAt,
    UpdatedAt,
} from 'sequelize-typescript';

@Table({
    tableName: 'user',
})
export class User extends Model<User> {
    @Column({
        field: 'userid',
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        primaryKey: true,
    })
    id: string;

    @Column({ field: 'username' })
    username: string;

    @Column({ field: 'password' })
    password: string;

    @Unique
    @IsEmail
    @Column({ field: 'email' })
    email: string;

    @CreatedAt
    @Column({ field: 'create_time' })
    createTime: Date;

    @UpdatedAt
    @Column({ field: 'update_time' })
    updateTime: Date;
}
