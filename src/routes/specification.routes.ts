import { Router } from "express";
import { createCategoryController } from "../modules/cars/useCases/createCategory";

const specificationRoutes = Router();

specificationRoutes.post("/", (request, response) => {});

export { specificationRoutes };
