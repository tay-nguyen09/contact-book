import express, {
  Express,
  Request,
  Response,
  NextFunction,
  Router,
} from "express";
import { usersContractRoutes } from "./usersContacts";

const router: Router = express.Router();

export const addApiPrefix = (app: Express) => {
  app.use("/api", usersContractRoutes(router));
};
