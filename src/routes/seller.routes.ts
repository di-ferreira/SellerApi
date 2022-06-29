import { Router } from "express";
import { Seller } from "../models/Seller";
import sellerRepository from "../repositories/Seller";

const sellerRoutes = Router();

sellerRoutes.post("/", async (req, res) => {
  try {
    const { name, email, password, sales_target } = req.body;

    const seller = new Seller();
    seller.name = name;
    seller.email = email;
    seller.sales_target = sales_target;
    seller.password = password;
    await sellerRepository.save(seller);
    return res.status(200).json({ result: "Seller saved successfully!" });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
});

sellerRoutes.get("/", async (req, res) => {
  try {
    const sellers = await sellerRepository.find({
      select: { id: true, name: true, email: true, sales_target: true },
    });
    return res.status(200).json({ result: sellers });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
});

sellerRoutes.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const seller = await sellerRepository.find({
      where: { id: parseInt(id) },
      select: { id: true, name: true, email: true, sales_target: true },
    });

    return res.status(200).json({ result: seller });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
});

sellerRoutes.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const seller = await sellerRepository.findOneBy({ id: parseInt(id) });
    const { name, email, password, sales_target } = req.body;

    if (name) {
      seller.name = name;
    }
    if (email) {
      seller.email = email;
    }
    if (sales_target) {
      seller.sales_target = sales_target;
    }
    if (password) {
      seller.password = password;
    }

    await sellerRepository.save(seller);
    return res.status(200).json({ result: seller });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
});

sellerRoutes.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const seller = await sellerRepository.findOneBy({ id: parseInt(id) });

    await sellerRepository.remove(seller);

    return res.status(200).json({ result: "Seller removed successfully!" });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
});

export { sellerRoutes };
