import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Cumulative ship-from location accuracy trend */
export const CumulativeAccuracyTrend = {
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
export type CumulativeAccuracyTrend =
  | (typeof CumulativeAccuracyTrend)[keyof typeof CumulativeAccuracyTrend]
  | (string & {});

export const cumulativeAccuracyTrendSchema: EnumSchema<CumulativeAccuracyTrend> =
  s.enumOf<CumulativeAccuracyTrend>(CumulativeAccuracyTrend);
