import {
  Column,
  Model,
  Table,
  HasMany,
  PrimaryKey,
  AutoIncrement,

} from 'sequelize-typescript';
// import { SequelizeModule } from '@nestjs/sequelize'
import { Sequelize, DataType } from 'sequelize-typescript';
// import { DataTypes } from 'sequelize/types';

// import sequelize from '@nestjs/sequelize';
// const sequelize = require('sequelize');

// import { Photo } from '../photos/photo.model';
@Table({
  tableName: 'note', schema: process.env.DATABASE_SCHEMA
})
export class Note extends Model {
  // constructor(define: {
  //   // timestamps: false
  // }) {
  //   super();
  // }

  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  title: string;

  @Column
  content: string;

  @Column
  added: Date;

  @Column
  updated: Date;

  @Column({
    type: DataType.STRING
  })
  status: string;

  // @Column
  // get name(): string {
  //   return 'My name is ' + this.getDataValue('name')
  // }


  @Column
  _createdAt: Date

  // @Column({ defaultValue: true })
  // createdAt: Date;
  // @Column
  // createdAt?: Date;
}

// let config = {
//   dialect: 'postgres',
//   host: process.env.DATABASE_HOST,
//   port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
//   username: process.env.DATABASE_USER,
//   password: process.env.DATABASE_PASSWORD,
//   database: process.env.DATABASE_NAME,
//   models: [Note],
//   autoLoadModels: true,
//   synchronize: true,
//   logging: false,
//   define: {
//     // timestamps: false
//   }
// }
// const sequelize = new Sequelize();

// Note.init({}, {
//   timestamps: false,
//   sequelize
// })
