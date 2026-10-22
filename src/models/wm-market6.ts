import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const WmMarket6 = {
  Mx: "mx",
  Ca: "ca",
  Us: "us",
} as const;
export type WmMarket6 = (typeof WmMarket6)[keyof typeof WmMarket6] | (string & {});

export const wmMarket6Schema: EnumSchema<WmMarket6> = s.enumOf<WmMarket6>(WmMarket6);
