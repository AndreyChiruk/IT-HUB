import { Table, Column, Model, DataType } from 'sequelize-typescript';

export interface CreateUserInterface {
  email: string;
  name: string;
  password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, CreateUserInterface> {
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email!: string;
  @Column({ type: DataType.STRING, unique: false, allowNull: false })
  name!: string;
  @Column({ type: DataType.STRING, allowNull: false })
  password!: string;
}
