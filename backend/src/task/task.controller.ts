import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from '../dto/create-task.dto';
import { Task } from './task.entity';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get()
  async getTasks() {
    return this.taskService.findAll();
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
