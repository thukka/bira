import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  assigned: string;

  @Column()
  subject: string;

  @Column()
  description: string;

  @Column({ default: false })
  deleted: boolean;
}
