import express, {
  Express,
  Request,
  Response,
  NextFunction,
  Router,
} from "express";
import dotenv from "dotenv";
import { checkConnectted } from "./middlewares/mongoDBConnection";
import mongoose from "mongoose";
import { setUpRoute } from "./routes";
import { checkConnectMongoDB } from "./config";
import { messeges } from "./utils/constants";

import cors from "cors";

type ExpressRequestParam = {
  req: Request;
  res: Response;
  next: NextFunction;
};
dotenv.config();

const app: Express = express();
const port = process.env.PORT;
mongoose.set("strictQuery", false);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

setUpRoute(app);

app.get("/", checkConnectted, (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

if (checkConnectMongoDB()) {
  app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
} else {
  console.log(messeges.fail);
}
