import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates whether pallets will be stacked when carrier arrives for pick-up. */
export const CommonStackability = {
  Stackable: "STACKABLE",
  NonStackable: "NON_STACKABLE",
} as const;
export type CommonStackability = (typeof CommonStackability)[keyof typeof CommonStackability] | (string & {});

export const commonStackabilitySchema: EnumSchema<CommonStackability> =
  s.enumOf<CommonStackability>(CommonStackability);
