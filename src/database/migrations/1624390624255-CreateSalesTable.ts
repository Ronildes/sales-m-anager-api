import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateSalesTable1624390624255
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'sales',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            default: 'uuid_generate_v4()',
            isPrimary: true,
          },
          {
            name: 'value',
            type: 'varchar',
          },
          {
            name: 'productName',
            type: 'varchar',
          },
          {
            name: 'productImage',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'buyer',
            type: 'varchar',
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('sales');
  }
}
