import { Router } from 'express';

import { getRepository } from 'typeorm';

import Sale from '@models/Sale';
import CreateSaleService from '@service/CreateSaleService';
import DeleteSaleService from '@service/DeleteSaleService';

const salesRouter = Router();

salesRouter.get('/', async (request, response) => {
  try {
    const saleRepository = getRepository(Sale);

    const sales = await saleRepository.find();

    return response.status(200).json(sales);
  } catch (err) {
    return response.status(400).json({ message: err.message });
  }
});

salesRouter.post('/create', async (request, response) => {
  try {
    const { buyer, productName } = request.body;

    const createSale = new CreateSaleService();

    const sale = await createSale.execute({
      buyer,
      productName,
    });

    return response.status(200).json(sale);
  } catch (err) {
    return response.status(400).json({ message: err.message });
  }
});

salesRouter.delete('/delete', async (request, response) => {
  try {
    const { id } = request.body;

    const deleteSale = new DeleteSaleService();

    await deleteSale.execute({
      id,
    });

    return response.status(200).json({ message: 'Sale deleted!' });
  } catch (err) {
    return response.status(400).json({ message: err.message });
  }
});

export default salesRouter;
