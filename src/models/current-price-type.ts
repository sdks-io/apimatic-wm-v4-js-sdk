import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CurrentPriceType = {
  Base: "BASE",
  Reduced: "REDUCED",
  Clearance: "CLEARANCE",
} as const;
export type CurrentPriceType = (typeof CurrentPriceType)[keyof typeof CurrentPriceType] | (string & {});

export const currentPriceTypeSchema: EnumSchema<CurrentPriceType> =
  s.enumOf<CurrentPriceType>(CurrentPriceType);
