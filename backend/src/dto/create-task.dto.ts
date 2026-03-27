import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTaskDto {
  assigned: string;

  @IsString()
  @IsNotEmpty()
  subject: string;

  description: string;
  deleted: boolean;
}
