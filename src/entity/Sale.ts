import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { SaleItem } from "./SaleItem";
import { Seller } from "./Seller";

@Entity()
export class Sale {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("datetime")
  date: string;

  @Column({ type: "float", precision: 10, scale: 2 })
  total: number;

  @ManyToOne(() => Seller, (seller) => seller.sales)
  seller: Seller;

  @OneToMany(() => SaleItem, (saleItems) => saleItems.sale)
  saleItems: SaleItem[];
}
