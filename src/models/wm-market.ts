import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const WmMarket = {
  Us: "us",
} as const;
export type WmMarket = (typeof WmMarket)[keyof typeof WmMarket] | (string & {});

export const wmMarketSchema: EnumSchema<WmMarket> = s.enumOf<WmMarket>(WmMarket);
