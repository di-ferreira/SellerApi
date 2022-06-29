import { Router } from "express";
import { productRoutes } from "./product.routes";
import { saleRoutes } from "./sale.routes";
import { saleItemRoutes } from "./saleItem.routes";
import { sellerRoutes } from "./seller.routes";

const routes = Router();

routes.get("/", (req, res) => {
  res.json({ message: "Hello world!" });
});

routes.use("/seller", sellerRoutes);
routes.use("/product", productRoutes);
routes.use("/sale", saleRoutes);
routes.use("/saleItems", saleItemRoutes);

export { routes };
