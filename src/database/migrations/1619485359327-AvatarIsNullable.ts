import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AvatarIsNullable1619485359327
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'users',
      'avatar',
      new TableColumn({
        name: 'avatar',
        type: 'varchar',
        isNullable: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'users',
      'avatar',
      new TableColumn({
        name: 'avatar',
        type: 'varchar',
        isNullable: false,
      })
    );
  }
}
