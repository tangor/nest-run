import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript';
import { PrimaryKey, DataType } from 'sequelize-typescript';

@Table({
  timestamps: true,
})
export class User extends Model<User> {
  // @PrimaryKey
  // sid: number;

  @Column
  name: string;

  @Column(DataType.TEXT)
  description: string;

  @CreatedAt
  creationDate: Date;

  @UpdatedAt
  updatedOn: Date;

  @DeletedAt
  deletionDate: Date;
}
