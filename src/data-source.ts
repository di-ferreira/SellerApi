import "reflect-metadata";
import { DataSource } from "typeorm";
import { Seller } from "./entity/Seller";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "src/db/database.sqlite",
  synchronize: true,
  logging: false,
  entities: [Seller],
  migrations: [],
  subscribers: [],
});
