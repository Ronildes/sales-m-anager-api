import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('sales')
class Sale {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  value: string;

  @Column()
  productName: string;

  @Column()
  buyer: string;

  @CreateDateColumn()
  createdAt: Date;
}

export default Sale;
