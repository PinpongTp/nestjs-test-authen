import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoService } from './todo.service';
import { Request } from '@nestjs/common';

@Controller('todos')
@UseGuards(JwtAuthGuard)
export class TodoController {
    constructor(private readonly service: TodoService) { }

    @Get()
    async index(@Request() req: any) {
        return await this.service.findAll()
    }

    @Get(':id')
    async find(@Param('id') id: string) {
        return await this.service.findOne(id)
    }

    @Post()
    async create(@Body() createTodoDto: CreateTodoDto) {
        return await this.service.create(createTodoDto)
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
        return await this.service.update(id, updateTodoDto)
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return await this.service.delete(id)
    }
}
