import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Strategy type supported for markets is Buy Box Price(for us and mx), External Price(for US, MX
 * and CA), Competitive Price(for us and mx).<br><b style="color:green;">Market availability: US |
 * CA | MX</b>
 */
export const StrategyType = {
  BuyBoxPrice: "Buy Box Price",
  ExternalPrice: "External Price",
  CompetitivePrice: "Competitive Price",
} as const;
export type StrategyType = (typeof StrategyType)[keyof typeof StrategyType] | (string & {});

export const strategyTypeSchema: EnumSchema<StrategyType> = s.enumOf<StrategyType>(StrategyType);
