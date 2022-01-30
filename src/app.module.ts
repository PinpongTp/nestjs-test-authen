import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoModule } from './todo/todo.module';
import { NoteController } from './note/note.controller';
import { NoteService } from './note/note.service';
import { NoteModule } from './note/note.module';
@Module({
  imports: [
    AuthModule, 
    UsersModule,
    ConfigModule.forRoot({
      envFilePath: '.development.env', // for use config in .env file
      load: [configuration], // for use config in ./config/configuration.ts file
      isGlobal: true,
    }), 
    MongooseModule.forRootAsync({
      imports: [ConfigModule.forRoot()],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('MONGODB_URL'),
      }),
      inject: [ConfigService]
    }),
    // MongooseModule.forRoot('mongodb://root:example@localhost:27017'), 
    TodoModule,
    NoteModule
  ],
  controllers: [AppController, NoteController],
  providers: [AppService, NoteService],
})
export class AppModule {}
