import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Sale } from "./Sale";

@Entity()
export class Seller {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 255 })
  email: string;

  @Column({ length: 255 })
  password: string;

  @Column({ type: "float", precision: 10, scale: 2 })
  sales_target: number;

  @OneToMany(() => Sale, (sale) => sale.seller)
  sales: Sale[];
}
