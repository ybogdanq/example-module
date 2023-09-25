import ApiError from "../../exceptions/apiError";
import ProductModel from "../../models/ProductModel";
import { IProductCms, IProductDoc } from "../../types/IProductCms";

export const getResponseProduct = async (
  prodCode: string
): Promise<IProductCms> => {
  const product = await ProductModel.findOne({ code: prodCode });
  if (!product) {
    throw ApiError.BadRequest(
      "Product does not exist anymore! Ask admin to add it to products list"
    );
  }
  return ProductDto(product);
};

export const ProductDto = (model: IProductDoc): IProductCms => {
  return {
    collectionName: model.collectionName,
    collectionCreatedAt: model.collectionCreatedAt,
    isActiveProduct: model.isActiveProduct,
    id: model._id,
    family: model.family,
    subFamily: model.subFamily,
    gender: model.gender,
    style: {
      "es-ES": model.style["es-ES"],
      "en-US": model.style["en-US"],
      "fr-FR": model.style["fr-FR"],
      "it-IT": model.style["it-IT"],
      "de-DE": model.style["de-DE"],
    },
    code: model.code,
    accessories: model.accessories,
    price: model.price,
    priceEu: model.priceEu,
    priceInt: model.price,
    type: model.type,
    description: model.description,
    images: model.images,
    sizes: model.sizes,
  };
};
