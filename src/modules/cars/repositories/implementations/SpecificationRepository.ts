import { Specification } from "../../model/Specification";
import {
  ICreateSpecificationRepository,
  ICreateSpecificationDTO,
} from "./../ISpecificationRepository";

class SpecificationRepository implements ICreateSpecificationRepository {
  private specification: Specification[];

  constructor() {
    this.specification = [];
  }

  create({ description, name }: ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specification.push(specification);
  }

  findByName(name: string): Specification {
    return this.specification.find(
      (specification) => specification.name === name
    );
  }
}

export { SpecificationRepository };
