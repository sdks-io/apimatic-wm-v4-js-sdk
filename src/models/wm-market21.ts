import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const WmMarket21 = {
  Mx: "mx",
} as const;
export type WmMarket21 = (typeof WmMarket21)[keyof typeof WmMarket21] | (string & {});

export const wmMarket21Schema: EnumSchema<WmMarket21> = s.enumOf<WmMarket21>(WmMarket21);
