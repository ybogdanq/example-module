import { NextFunction, Router, Response } from "express";
import productRoutes from "./productRoutes";

//@ts-ignore
const router = new Router();

router.use("", productRoutes);

export default router; //<--- of coure this one we have to connect to Express server.use function
