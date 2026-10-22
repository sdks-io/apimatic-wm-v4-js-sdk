import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Strategy type supported for markets is Buy Box Price(for us and mx),External Price(for us and mx,
 * ca),Competitive Price(for us and mx).<br><b style="color:green;">Market availability: US | CA |
 * MX</b>
 */
export const StrategyType1 = {
  BuyBoxPrice: "Buy Box Price",
  ExternalPrice: "External Price",
  CompetitivePrice: "Competitive Price",
} as const;
export type StrategyType1 = (typeof StrategyType1)[keyof typeof StrategyType1] | (string & {});

export const strategyType1Schema: EnumSchema<StrategyType1> = s.enumOf<StrategyType1>(StrategyType1);
