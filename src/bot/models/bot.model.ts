import { Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";

interface IBotCreationAttr {
    user_id: string | undefined;
    first_name: string | undefined;
    last_name: string | undefined;
    lang: string | undefined;
    name: string | undefined
    role:string | undefined
    last_state: string | undefined;
}

@Table({tableName:"user"})
export class Bot extends Model<Bot, IBotCreationAttr> {
    @Column({
        type:DataType.STRING,
        primaryKey:true
    })
    user_id:string|undefined

    @Column({
        type:DataType.STRING,
    })
    first_name:string|undefined

    @Column({
        type:DataType.STRING,
    })
    last_name:string|undefined

    @Column({
        type:DataType.STRING,
    })
    lang:string|undefined

    @Column({
        type:DataType.STRING,
    })
    name:string|undefined

    @Column({
        type:DataType.STRING,
    })
    role:string|undefined

    @Column({
        type:DataType.STRING,
    })
    last_state:string|undefined
}