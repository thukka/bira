import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  create(user: User) {
    return this.userRepository.insert(user);
  }

  findOne(id: number): Promise<User | null> {
    return this.userRepository.findOneBy({ id });
  }
}
