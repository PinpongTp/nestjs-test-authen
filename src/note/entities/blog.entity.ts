const { Sequelize, DataTypes } = require('sequelize');

import { Injectable } from '@nestjs/common';
import {
    Column,
    Model,
    Table,
    HasMany,
    PrimaryKey,
    AutoIncrement,

} from 'sequelize-typescript';

const sequelize = new Sequelize({
    dialect: 'postgres',
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    autoLoadModels: true,
    synchronize: true,
    logging: false,
});

@Table({
    tableName: 'note', schema: process.env.DATABASE_SCHEMA
})
export class Blog extends Model {

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

    //   @Column({ defaultValue: true })
    //   createdAt: Date;

}



// const User = sequelize.define('Blog', {
//     // Model attributes are defined here
//     firstName: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     lastName: {
//       type: DataTypes.STRING
//       // allowNull defaults to true
//     }
//   }, {
//     // Other model options go here
//   });

sequelize.define('Blog', {
    id: {
        type: DataTypes.NUMBER,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING
    }
});


// Blog.init({}, {
//     // Other model options go here
//     sequelize, // We need to pass the connection instance
//     // modelName: 'Blog', // We need to choose the model name
//     timestamps: true,
//     tableName: 'note'
// });

// export default Blog;

// the defined model is the class itself
// console.log(Blog === sequelize.models.Blog); // true