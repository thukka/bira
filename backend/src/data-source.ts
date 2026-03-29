import 'dotenv/config';
import { DataSource } from 'typeorm';
import { Task } from './task/task.entity';
import { User } from './user/user.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Task, User],
  synchronize: false, // disable for prod
  logging: true,
  migrations: ['src/db/migrations/*{.ts,.js}'],
});
