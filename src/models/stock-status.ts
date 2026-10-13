import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Stock health label based on current days of supply. */
export const StockStatus = {
  InStock: "InStock",
  AtRisk: "AtRisk",
  OutOfStock: "OutOfStock",
  LongTermOutOfStock: "LongTermOutOfStock",
  NewToWfs: "NewToWfs",
} as const;
export type StockStatus = (typeof StockStatus)[keyof typeof StockStatus] | (string & {});

export const stockStatusSchema: EnumSchema<StockStatus> = s.enumOf<StockStatus>(StockStatus);
