import { MigrationInterface, QueryRunner } from 'typeorm';

export class ChangeCreatedByType1774785030048 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "task" ALTER COLUMN "createdBy" TYPE VARCHAR(255)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "task" ALTER COLUMN "createdBy" TYPE character`,
    );
  }
}
