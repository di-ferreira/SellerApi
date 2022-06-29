import "reflect-metadata";
import { DataSource } from "typeorm";
import { Product } from "./entity/Product";
import { Sale } from "./entity/Sale";
import { SaleItem } from "./entity/SaleItem";
import { Seller } from "./entity/Seller";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "src/db/database.sqlite",
  synchronize: true,
  logging: false,
  entities: [Seller, Product, Sale, SaleItem],
  migrations: [],
  subscribers: [],
});
