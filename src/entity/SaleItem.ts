import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Product } from "./Product";
import { Sale } from "./Sale";

@Entity("items_venda")
export class SaleItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("int")
  quantity: number;

  @OneToOne(() => Product)
  @JoinColumn()
  product: Product;

  @OneToOne(() => Sale)
  @JoinColumn()
  sale: Sale;
}
