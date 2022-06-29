import { Router } from "express";
import { sellerRoutes } from "./seller.routes";

const routes = Router();

routes.get("/", (req, res) => {
  res.json({ message: "Hello world!" });
});

routes.use("/seller", sellerRoutes);

export { routes };
