import { Router } from "express";
import { Product } from "../models/Product";
import { Sale } from "../models/Sale";
import { SaleItem } from "../models/SaleItem";
import productRepository from "../repositories/Product";
import saleRepository from "../repositories/Sale";
import saleItemRepository from "../repositories/SaleItem";

const saleItemRoutes = Router();

saleItemRoutes.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { product, quantity } = req.body;

    const saleItem: SaleItem = await saleItemRepository.findOne({
      where: { id: parseInt(id) },
      relations: { sale: true },
    });

    const ItemProduct: Product = await productRepository.findOneBy({
      id: parseInt(product),
    });

    const sale: Sale = await saleRepository.findOneBy({ id: saleItem.sale.id });

    const saleItems: SaleItem[] = await saleItemRepository.findBy({
      sale: sale,
    });

    saleItem.product = ItemProduct;
    saleItem.quantity = quantity;
    saleItem.sale = sale;
    saleItem.total = ItemProduct.price * quantity;
    sale.total = saleItems.reduce((total, item) => {
      return (total += item.product.price * item.quantity);
    }, 0);

    await saleItemRepository.update(saleItem.id, saleItem);
    await saleRepository.update(sale.id, sale);
    console.log("Total ->", sale.total);

    return res.status(200).json({ result: "Item update successfully!" });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
});

saleItemRoutes.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const saleItem: SaleItem = await saleItemRepository.findOne({
      where: { id: parseInt(id) },
      relations: { sale: true },
    });

    const sale: Sale = await saleRepository.findOneBy({ id: saleItem.sale.id });

    await saleItemRepository.delete(saleItem);

    const saleItems: SaleItem[] = await saleItemRepository.findBy({
      sale: sale,
    });

    sale.total = saleItems.reduce((total, item) => {
      return (total += item.product.price * item.quantity);
    }, 0);

    await saleRepository.update(sale.id, sale);
    console.log("Total ->", sale.total);

    return res.status(200).json({ result: "Item removed successfully!" });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
});

export { saleItemRoutes };
