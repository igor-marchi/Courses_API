import { Specification } from "../../model/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from "./../ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
  private specification: Specification[];

  private static INSTANCE: SpecificationRepository;

  private constructor() {
    this.specification = [];
  }

  public static getInstance(): SpecificationRepository {
    if (!SpecificationRepository.INSTANCE) {
      return (SpecificationRepository.INSTANCE = new SpecificationRepository());
    }

    return SpecificationRepository.INSTANCE;
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

  listAll(): Specification[] {
    return this.specification;
  }
}

export { SpecificationRepository };
