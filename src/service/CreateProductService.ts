import Product from '@models/Product';

import { getRepository } from 'typeorm';

interface Request {
  name: string;
  value: string;
}

class CreateProductService {
  async execute({ name, value }: Request): Promise<Product> {
    const productRepository = getRepository(Product);

    if (!name || !value) {
      throw new Error('Name or value not found');
    }

    const checkProductExists = await productRepository.findOne({
      where: { name },
    });

    if (checkProductExists) {
      throw new Error('This product already exists');
    }

    const product = productRepository.create({
      name,
      value,
    });

    await productRepository.save(product);

    return product;
  }
}

export default CreateProductService;
