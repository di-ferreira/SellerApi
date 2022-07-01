import { Router } from "express";
import { format } from "date-fns";
import { Sale } from "../models/Sale";
import { SaleItem } from "../models/SaleItem";
import saleRepository from "../repositories/Sale";
import saleItemRepository from "../repositories/SaleItem";
import productRepository from "../repositories/Product";
import { Product } from "../models/Product";

const saleRoutes = Router();

saleRoutes.post("/", async (req, res) => {
  let totalSale = 0;
  try {
    const { seller, saleItems } = req.body;
    const sale = new Sale();
    sale.date = format(new Date(), "yyyy-MM-dd");
    sale.seller = seller;
    sale.total = 0.0;
    await saleRepository.save(sale);

    await saleItems.map(async (saleItem) => {
      const newSaleItem = new SaleItem();
      let productItem = await productRepository.findOneBy({
        id: parseInt(saleItem.product),
      });
      newSaleItem.quantity = saleItem.quantity;
      newSaleItem.product = saleItem.product;
      newSaleItem.total = productItem.price * saleItem.quantity;
      newSaleItem.sale = sale;
      totalSale = totalSale + productItem.price * saleItem.quantity;
      await saleItemRepository.save(newSaleItem);
      await saleRepository.update(sale.id, { total: totalSale });
    });

    return res.status(200).json({ result: "Sale saved successfully!" });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
});

saleRoutes.get("/", async (req, res) => {
  try {
    const sale = await saleRepository.find({
      relations: { seller: true, saleItems: true },
    });
    return res.status(200).json({ result: sale });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
});

saleRoutes.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const sale = await saleRepository.find({
      relations: { seller: true, saleItems: true },
      where: { id: parseInt(id) },
    });
    return res.status(200).json({ result: sale });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
});

saleRoutes.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const sale = await saleRepository.find({
      relations: { seller: true, saleItems: true },
      where: { id: parseInt(id) },
    });
    return res.status(200).json({ result: sale });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
});

saleRoutes.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const sale = await saleRepository.findOneBy({ id: parseInt(id) });

    await saleRepository.remove(sale);
    return res.status(200).json({ result: "Sale removed successfully!" });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
});

/* ---  SaleItems Routes --- */
saleRoutes.post("/:id/saleitem", async (req, res) => {
  try {
    const { id } = req.params;
    const { quantity, product } = req.body;
    const ItemProduct: Product = await productRepository.findOneBy({
      id: parseInt(product),
    });
    const saleItem = new SaleItem();
    const sale = await saleRepository.findOneBy({ id: parseInt(id) });

    saleItem.product = ItemProduct;
    saleItem.quantity = quantity;
    saleItem.sale = sale;
    saleItem.total = ItemProduct.price * quantity;
    sale.total = sale.total + saleItem.total;

    await saleItemRepository.save(saleItem);
    await saleRepository.update(sale.id, sale);

    return res.status(200).json({ result: "Item added successfully!" });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
});

export { saleRoutes };
