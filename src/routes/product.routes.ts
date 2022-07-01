import { Router } from "express";
import { Product } from "../models/Product";
import productRepository from "../repositories/Product";

const productRoutes = Router();

productRoutes.post("/", async (req, res) => {
  try {
    const { name, description, price, profit } = req.body;

    const product = new Product();

    product.name = name;
    product.description = description;
    product.price = price;
    product.profit = profit;

    await productRepository.save(product);
    return res.status(200).json({ result: product });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
});

productRoutes.get("/", async (req, res) => {
  try {
    const products = await productRepository.find();
    return res.status(200).json({ result: products });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
});

productRoutes.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await productRepository.findOneBy({ id: parseInt(id) });
    return res.status(200).json({ result: product });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
});

productRoutes.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const { name, description, price, profit } = req.body;

    const product = await productRepository.findOneBy({ id: parseInt(id) });

    if (name) {
      product.name = name;
    }
    if (description) {
      product.description = description;
    }
    if (price) {
      product.price = price;
    }
    if (profit) {
      product.profit = profit;
    }

    await productRepository.save(product);
    return res.status(200).json({ result: product });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
});

productRoutes.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await productRepository.findOneBy({ id: parseInt(id) });

    await productRepository.delete(product);
    return res.status(200).json({ result: product });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
});

export { productRoutes };
