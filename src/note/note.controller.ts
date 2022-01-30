import { Controller, Get, Post, Request } from '@nestjs/common';
import {  } from '@nestjs/common';
import { NoteService } from './note.service';

@Controller('note')
export class NoteController {
    constructor(private noteService: NoteService) { }

    @Get()
    getNote() {
        return this.noteService.findAll();
    }

    @Post('create')
    postCreate(@Request() req: any) {
        console.log('test create')
        return this.noteService.create();
    }

}
