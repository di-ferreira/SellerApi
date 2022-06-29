import { AppDataSource } from "../data-source";
import { Product } from "../entity/Product";

const productRepository = AppDataSource.getRepository(Product);

export default productRepository;
