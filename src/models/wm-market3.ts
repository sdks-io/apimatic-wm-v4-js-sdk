import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const WmMarket3 = {
  Us: "us",
  Mx: "mx",
} as const;
export type WmMarket3 = (typeof WmMarket3)[keyof typeof WmMarket3] | (string & {});

export const wmMarket3Schema: EnumSchema<WmMarket3> = s.enumOf<WmMarket3>(WmMarket3);
