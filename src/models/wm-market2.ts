import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const WmMarket2 = {
  Us: "US",
  Ca: "CA",
  Mx: "MX",
  Cl: "CL",
} as const;
export type WmMarket2 = (typeof WmMarket2)[keyof typeof WmMarket2] | (string & {});

export const wmMarket2Schema: EnumSchema<WmMarket2> = s.enumOf<WmMarket2>(WmMarket2);
