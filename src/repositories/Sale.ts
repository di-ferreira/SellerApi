import { AppDataSource } from "../data-source";
import { Sale } from "../entity/Sale";

const saleRepository = AppDataSource.getRepository(Sale);

export default saleRepository;
