import { Router } from 'express';
import { getRepository } from 'typeorm';

import CreateProductService from '@service/CreateProductService';
import Product from '@models/Product';
import DeleteProductService from '@service/DeleteProductService';

const productsRouter = Router();

productsRouter.get('/', async (request, response) => {
  try {
    const productRepository = getRepository(Product);

    const product = await productRepository.find();

    return response.status(200).json(product);
  } catch (err) {
    return response.status(400).json({ message: err.message });
  }
});

productsRouter.post('/create', async (request, response) => {
  try {
    const { name, value } = request.body;

    const createProduct = new CreateProductService();

    const product = await createProduct.execute({
      name,
      value,
    });

    return response.status(200).json(product);
  } catch (err) {
    return response.status(400).json({ message: err.message });
  }
});

productsRouter.delete('/delete', async (request, response) => {
  try {
    const { name } = request.body;

    const deleteProduct = new DeleteProductService();

    await deleteProduct.execute({
      name,
    });

    return response.status(200).json({ message: 'Product deleted!' });
  } catch (err) {
    return response.status(400).json({ message: err.message });
  }
});

export default productsRouter;
