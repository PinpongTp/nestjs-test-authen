import {
    Column,
    Model,
    Table,
    HasMany,
    PrimaryKey,
    AutoIncrement,
  } from 'sequelize-typescript';
  // import { Photo } from '../photos/photo.model';
  @Table({ tableName: 'note', schema: process.env.DATABASE_SCHEMA })
  export class Note extends Model {
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

    @Column
    status: string;
  }
  