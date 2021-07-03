import { Category } from "../../model/Category";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";

class ListCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  execute(): Category[] {
    return this.categoryRepository.list();
  }
}

export { ListCategoryUseCase };
