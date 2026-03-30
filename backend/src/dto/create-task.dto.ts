import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTaskDto {
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
  assigned: string;

  @IsString()
  @IsNotEmpty()
  subject: string;

  description: string;
  deleted: boolean;
}
