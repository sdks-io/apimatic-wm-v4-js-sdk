import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Unit of the weight being measured. */
export const CommonUnitOfWeight = {
  Lb: "LB",
  Kg: "KG",
} as const;
export type CommonUnitOfWeight = (typeof CommonUnitOfWeight)[keyof typeof CommonUnitOfWeight] | (string & {});

export const commonUnitOfWeightSchema: EnumSchema<CommonUnitOfWeight> =
  s.enumOf<CommonUnitOfWeight>(CommonUnitOfWeight);
