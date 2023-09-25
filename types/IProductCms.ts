import { Types } from "mongoose";
import { locales } from "../utils/locales";
import { Document } from "mongoose";

export enum AccessoryNamesEnum {
  "BADANA K6" = "BAD-002-004",
  "BADANA K7" = "BAD-001-006",
  "BADANA K9" = "BAD-002-003",
  "BADANA K10" = "BAD-001-007",
  "BADANA K12" = "BAD-001-008",
  "Badana Triatlon" = "BAD-003-005",
  "Badana Junior" = "BAD-004-004",
  "Var.A" = "VAR-000-001",
  "Var.B" = "VAR-000-002",
  "Var.C" = "VAR-000-003",
  "Var.D" = "VAR-000-004",
  "Var.E" = "VAR-000-005",
  "Nickname" = "90-01-009-003-00",
  "4º BOLSILLO" = "90-01-009-004-00",
}

export type IProductCollection = {
  name: string;
  products: Types.ObjectId[];
  createdAt: Date;
  isActiveCollection: boolean;
};

export type AccessoryIncludedStatus = "TRUE" | "FALSE" | "DEFAULT";

export type IProductCms = {
  id: Types.ObjectId;
  collectionName: string;
  collectionCreatedAt: Date;
  isActiveProduct: boolean;
  family: string;
  gender: string;
  subFamily: string;
  code: string;
  style: {
    [key in keyof typeof locales]: string;
  };
  accessories: {
    [key in AccessoryNamesEnum]: AccessoryIncludedStatus;
  };
  price: {
    range1: number;
    range2: number;
    range3: number;
  };
  priceEu: {
    range1: number;
    range2: number;
    range3: number;
  };
  priceInt: {
    range1: number;
    range2: number;
    range3: number;
  };
  images: string[];
  description: {
    [key in keyof typeof locales]: string;
  };
  type: "product" | "badana" | "binary" | "variant";
  sizes: string[];
};

export interface IProductModel extends IProductCms {}

export type IProductDoc = Document<unknown, any, IProductModel> &
  IProductModel & {
    _id: Types.ObjectId;
  };
