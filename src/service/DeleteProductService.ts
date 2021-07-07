import { getRepository } from 'typeorm';
import Product from '../models/Product';

interface Request {
  name: string;
}

class DeleteProductService {
  async execute({ name }: Request): Promise<void> {
    const productRepository = getRepository(Product);

    const product = await productRepository.findOne({
      where: { name },
    });

    if (!product) {
      throw new Error('This product not exists');
    }

    await productRepository.remove(product);
  }
}

export default DeleteProductService;
