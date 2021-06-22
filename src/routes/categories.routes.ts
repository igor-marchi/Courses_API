import { Router } from 'express';
import { CategoryRepository } from '../repositories/CategoryRepository';

const categoriesRoutes = Router();
const categoryRepository = new CategoryRepository();

categoriesRoutes.get('/', (request, response) => {
  const all = categoryRepository.list();

  return response.status(200).json(all);
});

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const categoryAlreadyExists = categoryRepository.findByName(name);

  if (categoryAlreadyExists) {
    return response.status(400).json({ error: 'Category Already exists' });
  }

  categoryRepository.create({ name, description });

  return response.status(201).send()
});

export { categoriesRoutes };
