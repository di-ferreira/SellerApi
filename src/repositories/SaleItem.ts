import { AppDataSource } from "../data-source";
import { SaleItem } from "../entity/SaleItem";

const saleItemRepository = AppDataSource.getRepository(SaleItem);

export default saleItemRepository;
