import { ProductDto } from "../dtos/productDto/productDto";
import ApiError from "../exceptions/apiError";
import ProductModel from "../models/ProductModel";
import { IProductCms } from "../types/IProductCms";
import { json2csv } from "json-2-csv";

class ProductService {
  static async downloadCollectionCSV(collectionName: string): Promise<string> {
    const products = await ProductModel.find({
      collectionName: collectionName,
    });

    if (!products) {
      throw ApiError.BadRequest("Error occured during CSV download");
    }

    const productDtos: IProductCms[] = [];
    for (const product of products) {
      productDtos.push(ProductDto(product));
    }

    const preparedData = productDtos.map((dataPiece) => ({
      ...dataPiece,
      images:
        dataPiece.images.length > 0 ? `[${dataPiece.images.join(",")}]` : "",
      sizes: dataPiece.sizes.length > 0 ? `[${dataPiece.sizes.join(",")}]` : "",
    }));

    return await json2csv(preparedData, getProductCSVoptions());
  }
}

export default ProductService;

function getProductCSVoptions() {
  return {
    keys: [
      { field: "family", title: "Familia" },
      { field: "gender", title: "Genero" },
      { field: "subFamily", title: "SubFamilia" },
      { field: "code", title: "CodigoEstilo" },
      { field: "style.es-ES", title: "Estilo" },
      { field: "style.en-US", title: "Estilo-EN" },
      { field: "style.fr-FR", title: "Estilo-FR" },
      { field: "style.it-IT", title: "Estilo-IT" },
      { field: "style.de-DE", title: "Estilo-DE" },
      { field: "accessories.BAD-002-004", title: "BAD-002-004" },
      { field: "accessories.BAD-001-006", title: "BAD-001-006" },
      { field: "accessories.BAD-002-003", title: "BAD-002-003" },
      { field: "accessories.BAD-001-007", title: "BAD-001-007" },
      { field: "accessories.BAD-001-008", title: "BAD-001-008" },
      { field: "accessories.BAD-003-005", title: "BAD-003-005" },
      { field: "accessories.BAD-004-004", title: "BAD-004-004" },
      { field: "accessories.VAR-000-001", title: "VAR-000-001" },
      { field: "accessories.VAR-000-002", title: "VAR-000-002" },
      { field: "accessories.VAR-000-003", title: "VAR-000-003" },
      { field: "accessories.VAR-000-004", title: "VAR-000-004" },
      { field: "accessories.VAR-000-005", title: "VAR-000-005" },
      { field: "accessories.90-01-009-003-00", title: "90-01-009-003-00" },
      { field: "accessories.90-01-009-004-00", title: "90-01-009-004-00" },
      { field: "price.range1", title: "PrecioCustom" },
      { field: "priceEu.range1", title: "PrecioCustomEuropa" },
      { field: "priceInt.range1", title: "PrecioCustomInternacional" },
      { field: "images", title: "Imagenes" },
      { field: "description.es-ES", title: "Descripcion-ES" },
      { field: "description.en-US", title: "Descripcion-EN" },
      { field: "description.fr-FR", title: "Descripcion-FR" },
      { field: "description.it-IT", title: "Descripcion-IT" },
      { field: "description.de-DE", title: "Descripcion-DE" },
      { field: "type", title: "Type" },
      { field: "sizes", title: "Tallas" },
    ],
    excludeKeys: [
      "id",
      "priceInt.range2",
      "priceInt.range3",
      "priceEu.range3",
      "priceEu.range2",
      "price.range3",
      "price.range2",
    ],
    emptyFieldValue: "",
  };
}
