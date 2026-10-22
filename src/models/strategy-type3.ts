import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Strategy type supported for markets is Buy Box Price(for us and mx),External Price(for us, mx and
 * ca),Competitive Price(for us and mx).<br><b style="color:green;">Market availability: US | CA |
 * MX</b>
 */
export const StrategyType3 = {
  BuyBoxPrice: "Buy Box Price",
  ExternalPrice: "External Price",
  CompetitivePrice: "Competitive Price",
} as const;
export type StrategyType3 = (typeof StrategyType3)[keyof typeof StrategyType3] | (string & {});

export const strategyType3Schema: EnumSchema<StrategyType3> = s.enumOf<StrategyType3>(StrategyType3);
