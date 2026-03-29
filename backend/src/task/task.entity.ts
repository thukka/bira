import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  createdBy: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @Column()
  assigned: string;

  @Column()
  subject: string;

  @Column()
  description: string;

  @Column({ default: false })
  deleted: boolean;
}
