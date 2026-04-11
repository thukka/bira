import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import bcrypt from 'bcrypt';
import { CreateUserDto } from '../dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async addUser(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    const user: User = new User();

    user.email = createUserDto.email;
    user.username = createUserDto.username;

    // generate hash for user password

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(createUserDto.password, saltRounds);

    user.password = passwordHash;

    return this.userService.create(user);
  }

  @Get()
  async findUser(@Body() { id }: User) {
    return this.userService.findOne(id);
  }
}
