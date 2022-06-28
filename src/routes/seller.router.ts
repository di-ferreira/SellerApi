import { Router } from "express";

const routes = Router();

routes.post("/", async (req, res) => {
  try {
    const { id, name, email, password, sales_target } = req.body;
  } catch (err) {
    return res.status(400).json({ error: err });
  }
  res.json({ message: "Hello world!" });
});

export { routes };
