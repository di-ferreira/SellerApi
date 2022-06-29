import { Product } from "./Product";
import { Sale } from "./Sale";

export class SaleItem {
  id: number;
  quantity: number;
  total: number;
  product: Product;
  sale: Sale;
}
