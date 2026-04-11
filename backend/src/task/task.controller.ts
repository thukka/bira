import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from '../dto/create-task.dto';
import { Task } from './task.entity';
import { AuthGuard } from '../auth/auth.guard';
import type { Request } from 'express';
import { AuthUser } from './task.types';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @UseGuards(AuthGuard)
  @Get()
  async getTasks(@Req() req: Request) {
    if (!req['user']) {
      throw new UnauthorizedException();
    }

    const auth = req['user'] as AuthUser;

    return this.taskService.findAll(auth.username);
  }

  @Post()
  async createTask(@Body() createTaskDto: CreateTaskDto) {
    const task: Task = new Task();

    task.createdBy = createTaskDto.createdBy;
    task.createdAt = new Date();
    task.updatedAt = new Date();
    task.assigned = createTaskDto.assigned;
    task.subject = createTaskDto.subject;
    task.description = createTaskDto.description;
    task.deleted = createTaskDto.deleted;

    return this.taskService.create(task);
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string) {
    return this.taskService.delete(id);
  }
}
