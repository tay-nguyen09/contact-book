import { checkConnectMongoDB } from "../config";
import express from "express";

type checkConnecttedFunctionType = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => void;

const checkConnectted: checkConnecttedFunctionType = (req, res, next) => {
  if (checkConnectMongoDB()) {
    next();
  } else {
    return checkConnectMongoDB();
  }
};
export { checkConnectted };
