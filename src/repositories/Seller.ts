import { AppDataSource } from "../data-source";
import { Seller } from "../entity/Seller";

const sellerRepository = AppDataSource.getRepository(Seller);

export default sellerRepository;
