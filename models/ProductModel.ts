import { model, Schema } from "mongoose";
import { AccessoryNamesEnum, IProductModel } from "../types/IProductCms";

const ProductSchema = new Schema<IProductModel>(
  {
    collectionName: { type: String, required: true, unique: true },
    collectionCreatedAt: { type: Schema.Types.Date, required: true },
    isActiveProduct: { type: Boolean, default: false },
    family: String,
    subFamily: String,
    gender: String,
    style: {
      "es-ES": String,
      "en-US": String,
      "fr-FR": String,
      "it-IT": String,
      "de-DE": String,
    },
    code: { required: true, type: String },
    accessories: {
      [AccessoryNamesEnum["BADANA K6"]]: String,
      [AccessoryNamesEnum["BADANA K7"]]: String,
      [AccessoryNamesEnum["BADANA K9"]]: String,
      [AccessoryNamesEnum["BADANA K10"]]: String,
      [AccessoryNamesEnum["BADANA K12"]]: String,
      [AccessoryNamesEnum["Badana Triatlon"]]: String,
      [AccessoryNamesEnum["Badana Junior"]]: String,
      [AccessoryNamesEnum["Var.A"]]: String,
      [AccessoryNamesEnum["Var.B"]]: String,
      [AccessoryNamesEnum["Var.C"]]: String,
      [AccessoryNamesEnum["Var.D"]]: String,
      [AccessoryNamesEnum["Var.E"]]: String,
      [AccessoryNamesEnum["Nickname"]]: String,
      [AccessoryNamesEnum["4º BOLSILLO"]]: String,
    },
    price: {
      range1: Number,
      range2: Number,
      range3: Number,
    },
    priceEu: {
      range1: Number,
      range2: Number,
      range3: Number,
    },
    priceInt: {
      range1: Number,
      range2: Number,
      range3: Number,
    },
    images: [],
    description: {
      "es-ES": String,
      "en-US": String,
      "fr-FR": String,
      "it-IT": String,
      "de-DE": String,
    },
    type: String,
    sizes: { type: Schema.Types.Mixed, default: [] },
  },
  { strict: false, timestamps: true }
);

export default model<IProductModel>("ProductCms", ProductSchema);
