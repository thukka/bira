import { MigrationInterface, QueryRunner } from 'typeorm';

export class TaskUpdateV21774783964491 implements MigrationInterface {
  name = 'TaskUpdateV21774783964491';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "task" ADD "createdBy" character`);
    await queryRunner.query(`ALTER TABLE "task" ADD "createdAt" TIMESTAMP`);
    await queryRunner.query(`ALTER TABLE "task" ADD "updatedAt" TIMESTAMP`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "task" DROP COLUMN "updatedAt"`);
    await queryRunner.query(`ALTER TABLE "task" DROP COLUMN "createdAt"`);
    await queryRunner.query(`ALTER TABLE "task" DROP COLUMN "createdBy"`);
  }
}
