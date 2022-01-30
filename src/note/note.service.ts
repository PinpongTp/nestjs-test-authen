import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Note } from './entities/note.entity';

@Injectable()
export class NoteService {
    constructor(
        @InjectModel(Note)
        private noteModel: typeof Note,
    ) {
        // super();
    }

    // async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    //     return await new this.model({
    //         ...createTodoDto,
    //         createAt: new Date(),
    //     }).save();
    // }

    async create(): Promise<Note> {
        console.log('test create note')
        // return 'test create service'

        return await new this.noteModel({
            title: 'test update with nestJs',
            content: 'this is content update.',
            status: 'active',
        }).save();

        // let create = await this.noteModel.create({
        //     title: 'test update with nestJs',
        //     content: 'this is content update.',
        //     status: 'active',
        // })

        // if(create) {
        //     return create
        // } else {
        //     return 'error'
        // }
    }

    async findAll(): Promise<Note[] | undefined> {
        return await this.noteModel.findAll<Note>();
    }

}
