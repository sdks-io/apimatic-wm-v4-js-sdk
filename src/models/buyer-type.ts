import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BuyerType = {
  B2B: "B2B",
  B2C: "B2C",
  All: "All",
} as const;
export type BuyerType = (typeof BuyerType)[keyof typeof BuyerType] | (string & {});

export const buyerTypeSchema: EnumSchema<BuyerType> = s.enumOf<BuyerType>(BuyerType);
