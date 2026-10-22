import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Impacted orders trend */
export const OrdersImpactedTrend = {
  GreenUp: "GREEN_UP",
  Green: "GREEN",
  GreenDown: "GREEN_DOWN",
  YellowUp: "YELLOW_UP",
  Yellow: "YELLOW",
  YellowDown: "YELLOW_DOWN",
  RedUp: "RED_UP",
  Red: "RED",
  RedDown: "RED_DOWN",
} as const;
export type OrdersImpactedTrend =
  | (typeof OrdersImpactedTrend)[keyof typeof OrdersImpactedTrend]
  | (string & {});

export const ordersImpactedTrendSchema: EnumSchema<OrdersImpactedTrend> =
  s.enumOf<OrdersImpactedTrend>(OrdersImpactedTrend);
