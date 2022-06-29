import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("produtos")
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
}
