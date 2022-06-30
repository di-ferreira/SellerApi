import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product";
import { Sale } from "./Sale";

@Entity()
export class SaleItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("int")
  quantity: number;

  @Column({ type: "float", precision: 10, scale: 2 })
  total: number;

  @ManyToOne(() => Product, (product) => product.saleItems, { eager: true })
  product: Product;

  @ManyToOne(() => Sale, (sale) => sale.saleItems)
  sale: Sale;
}
