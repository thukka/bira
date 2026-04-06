import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  findAll(username: string): Promise<Task[]> {
    return this.taskRepository.find({ where: { assigned: username } });
  }

  create(task: Task) {
    return this.taskRepository.insert(task);
  }

  delete(id: string) {
    return this.taskRepository.delete(id);
  }
}
