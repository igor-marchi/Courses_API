import { Specification } from "../model/Specification";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ICreateSpecificationRepository {
  create({ description, name }: ICreateSpecificationDTO): void;
  findByName(name: string): Specification;
}

export { ICreateSpecificationRepository, ICreateSpecificationDTO };
