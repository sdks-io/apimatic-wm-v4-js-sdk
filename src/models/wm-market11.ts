import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const WmMarket11 = {
  Mx: "mx",
  Ca: "ca",
  Cl: "cl",
} as const;
export type WmMarket11 = (typeof WmMarket11)[keyof typeof WmMarket11] | (string & {});

export const wmMarket11Schema: EnumSchema<WmMarket11> = s.enumOf<WmMarket11>(WmMarket11);
