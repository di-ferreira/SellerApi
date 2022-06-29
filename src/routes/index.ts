import { Router } from "express";
import { productRoutes } from "./product.routes";
import { sellerRoutes } from "./seller.routes";

const routes = Router();

routes.get("/", (req, res) => {
  res.json({ message: "Hello world!" });
});

routes.use("/seller", sellerRoutes);
routes.use("/product", productRoutes);

export { routes };
