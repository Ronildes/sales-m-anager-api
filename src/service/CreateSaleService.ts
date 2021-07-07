import Sale from '@models/Sale';
import Product from '@models/Product';

import { getRepository } from 'typeorm';

interface Request {
  buyer: string;
  productName: string;
}

class CreateSaleService {
  async execute({ buyer, productName }: Request): Promise<Sale> {
    const saleRepository = getRepository(Sale);
    const productRepository = getRepository(Product);

    if (!buyer || !productName) {
      throw new Error('Buyer name or product name not found');
    }

    const product = await productRepository.findOne({
      where: { name: productName },
    });

    if (!product) {
      throw new Error('This product not exists');
    }

    const sale = saleRepository.create({
      value: product.value,
      buyer,
      productName,
    });

    await saleRepository.save(sale);

    return sale;
  }
}

export default CreateSaleService;
