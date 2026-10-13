import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IncludedDatum = {
  Attributes: "attributes",
  Dimensions: "dimensions",
  Identifiers: "identifiers",
  Images: "images",
  ProductTypes: "productTypes",
  Relationships: "relationships",
  SalesRanks: "salesRanks",
} as const;
export type IncludedDatum = (typeof IncludedDatum)[keyof typeof IncludedDatum] | (string & {});

export const includedDatumSchema: EnumSchema<IncludedDatum> = s.enumOf<IncludedDatum>(IncludedDatum);
