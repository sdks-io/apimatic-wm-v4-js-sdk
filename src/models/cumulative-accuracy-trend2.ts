import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Cumulative carrier method accuracy trend */
export const CumulativeAccuracyTrend2 = {
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
export type CumulativeAccuracyTrend2 =
  | (typeof CumulativeAccuracyTrend2)[keyof typeof CumulativeAccuracyTrend2]
  | (string & {});

export const cumulativeAccuracyTrend2Schema: EnumSchema<CumulativeAccuracyTrend2> =
  s.enumOf<CumulativeAccuracyTrend2>(CumulativeAccuracyTrend2);
