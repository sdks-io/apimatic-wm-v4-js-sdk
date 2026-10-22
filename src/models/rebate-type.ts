import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RebateType = {
  Amount: "AMOUNT",
  Product: "PRODUCT",
} as const;
export type RebateType = (typeof RebateType)[keyof typeof RebateType] | (string & {});

export const rebateTypeSchema: EnumSchema<RebateType> = s.enumOf<RebateType>(RebateType);
