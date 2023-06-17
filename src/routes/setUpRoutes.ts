import { Express, Router } from "express";
import { addApiPrefix } from "./api";
const setUpRoute = (app: Express) => {
  addApiPrefix(app);
};
export { setUpRoute };
