import { Body, Controller, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from '../dto/create-task.dto';
import { Task } from './task.entity';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Post()
  async createTask(@Body() createTaskDto: CreateTaskDto) {
    const task: Task = new Task();

    task.assigned = createTaskDto.assigned;
    task.subject = createTaskDto.subject;
    task.description = createTaskDto.description;
    task.deleted = createTaskDto.deleted;

    return this.taskService.create(task);
  }
}
