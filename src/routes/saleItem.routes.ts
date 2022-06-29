import { Router } from "express";
import { SaleItem } from "../models/SaleItem";
import saleItemRepository from "../repositories/SaleItem";

const saleItemRoutes = Router();

// saleItemRoutes.post("/", async (req, res) => {
//   try {
//     const { id, quantity, product, sale } = req.body;
//     const saleItem = new SaleItem();

//     await saleItemRepository.save(sale);
//     return res.status(200).json({ result: "Sale saved successfully!" });
//   } catch (err) {
//     return res.status(400).json({ error: err });
//   }
// });

// saleItemRoutes.get("/", async (req, res) => {
//   try {
//     const sale = await saleItemRepository.find({
//       relations: { seller: true, saleItems: true },
//     });
//     return res.status(200).json({ result: sale });
//   } catch (err) {
//     return res.status(400).json({ error: err });
//   }
// });

// saleItemRoutes.get("/:id", async (req, res) => {
//   const { id } = req.params;
//   try {
//     const sale = await saleItemRepository.find({
//       relations: { seller: true, saleItems: true },
//       where: { id: parseInt(id) },
//     });
//     return res.status(200).json({ result: sale });
//   } catch (err) {
//     return res.status(400).json({ error: err });
//   }
// });

// saleItemRoutes.delete("/:id", async (req, res) => {
//   const { id } = req.params;
//   try {
//     const sale = await saleItemRepository.findOneBy({ id: parseInt(id) });

//     await saleItemRepository.remove(sale);
//     return res.status(200).json({ result: "Sale removed successfully!" });
//   } catch (err) {
//     return res.status(400).json({ error: err });
//   }
// });

export { saleItemRoutes };
