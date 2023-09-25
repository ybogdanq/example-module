import { Router } from "express";

import ProductController from "../controller/productController";
import { ApiRoutes } from "../types/ApiRoutes";

//@ts-ignore
const router = new Router();

router.get(
  ApiRoutes.DownloadCollectionCSV + ":collectionName",
  //here we can include authorization middleware if needed
  ProductController.downloadCollectionCSV
);

export default router