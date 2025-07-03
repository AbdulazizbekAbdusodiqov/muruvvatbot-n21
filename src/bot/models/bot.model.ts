import { Model, Table } from "sequelize-typescript";

interface IBotCreationAttr {
    user_id: number | undefined;
    first_name: string | undefined;
    last_name: string | undefined;
    lang: string | undefined;
    real_name: string | undefined
    last_state: string | undefined;
}

@Table({tableName:"user"})
export class Bot extends Model<Bot, IBotCreationAttr> {
}