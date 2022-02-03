import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Note } from './entities/note.entity';
import { NoteController } from './note.controller';
import { NoteService } from './note.service';
import { Blog } from './entities/blog.entity';

@Module({
    imports: [
        SequelizeModule.forFeature([
            Note,Blog
        ]),
    ],
    controllers: [NoteController],
    providers: [NoteService],
    exports: [NoteService],
})
export class NoteModule {}