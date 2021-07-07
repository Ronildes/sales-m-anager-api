import { getRepository } from 'typeorm';
import Sale from '../models/Sale';

interface Request {
  id: string;
}

class DeleteSaleService {
  async execute({ id }: Request): Promise<void> {
    const saleRepository = getRepository(Sale);

    const sale = await saleRepository.findOne({
      where: { id },
    });

    if (!sale) {
      throw new Error('This sale not exists');
    }

    await saleRepository.remove(sale);
  }
}

export default DeleteSaleService;
