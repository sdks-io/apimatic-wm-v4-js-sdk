import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IdentifierType = {
  WalmartItemId: "WALMART_ITEM_ID",
  Gtin: "GTIN",
  Upc: "UPC",
  Ean: "EAN",
  Isbn: "ISBN",
  Sku: "SKU",
} as const;
export type IdentifierType = (typeof IdentifierType)[keyof typeof IdentifierType] | (string & {});

export const identifierTypeSchema: EnumSchema<IdentifierType> = s.enumOf<IdentifierType>(IdentifierType);
