import "reflect-metadata";
import { AppDataSource } from "./data-source";
import { app } from "./app";

const PORT = 3333;

AppDataSource.initialize().then(() => {
  app.listen(PORT, () => {
    console.log(`🏆 Server running on port ${PORT}!`);
  });
});
