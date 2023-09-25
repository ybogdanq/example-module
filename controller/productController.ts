import { NextFunction, Request, Response } from "express";
import ProductService from "../services/productService";

class ProductController {
  static async downloadCollectionCSV(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const collectionName = req.params.collectionName;
      const csvData = await ProductService.downloadCollectionCSV(
        collectionName
      );
      res
        .attachment(`Products - ${collectionName} collection`)
        .type(".csv")
        .send(csvData);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

export default ProductController;
