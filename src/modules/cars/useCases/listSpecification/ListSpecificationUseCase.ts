import { Specification } from "../../model/Specification";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

class ListSpecificationUseCase {
  constructor(private specificationRepository: ISpecificationRepository) {}

  excute(): Specification[] {
    return this.specificationRepository.listAll();
  }
}

export { ListSpecificationUseCase };
