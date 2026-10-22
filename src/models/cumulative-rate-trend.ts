import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Cumulative valid tracking rate trend */
export const CumulativeRateTrend = {
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
export type CumulativeRateTrend =
  | (typeof CumulativeRateTrend)[keyof typeof CumulativeRateTrend]
  | (string & {});

export const cumulativeRateTrendSchema: EnumSchema<CumulativeRateTrend> =
  s.enumOf<CumulativeRateTrend>(CumulativeRateTrend);
