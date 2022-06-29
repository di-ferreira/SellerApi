import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { SaleItem } from "./SaleItem";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 255 })
  description: string;

  @Column({ type: "float", precision: 10, scale: 2 })
  price: number;

  @Column({ type: "float", precision: 10, scale: 2 })
  profit: number;

  @OneToMany(() => SaleItem, (saleItem) => saleItem.product)
  saleItems: SaleItem[];
}
