import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const WmMarket1 = {
  Us: "us",
  Ca: "ca",
  Mx: "mx",
  Cl: "cl",
} as const;
export type WmMarket1 = (typeof WmMarket1)[keyof typeof WmMarket1] | (string & {});

export const wmMarket1Schema: EnumSchema<WmMarket1> = s.enumOf<WmMarket1>(WmMarket1);
