import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Seller } from "./Seller";

@Entity("vendas")
export class Sale {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("datetime")
  date: string;

  @OneToOne(() => Seller)
  @JoinColumn()
  seller: Seller;
}
