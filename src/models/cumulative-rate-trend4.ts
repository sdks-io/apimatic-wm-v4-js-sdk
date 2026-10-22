import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Cumulative seller response rate trend */
export const CumulativeRateTrend4 = {
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
export type CumulativeRateTrend4 =
  | (typeof CumulativeRateTrend4)[keyof typeof CumulativeRateTrend4]
  | (string & {});

export const cumulativeRateTrend4Schema: EnumSchema<CumulativeRateTrend4> =
  s.enumOf<CumulativeRateTrend4>(CumulativeRateTrend4);
