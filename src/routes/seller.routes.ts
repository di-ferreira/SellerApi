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
    return res.status(200).json({ result: seller });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
});

sellerRoutes.get("/", async (req, res) => {
  try {
    const sellers = await sellerRepository.find();
    return res.status(200).json({ result: sellers });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
});

export { sellerRoutes };