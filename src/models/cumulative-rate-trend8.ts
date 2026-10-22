import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Cumulative rate of orders cancelled trend */
export const CumulativeRateTrend8 = {
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
export type CumulativeRateTrend8 =
  | (typeof CumulativeRateTrend8)[keyof typeof CumulativeRateTrend8]
  | (string & {});

export const cumulativeRateTrend8Schema: EnumSchema<CumulativeRateTrend8> =
  s.enumOf<CumulativeRateTrend8>(CumulativeRateTrend8);
