import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Cumulative refunds rate trend */
export const CumulativeRateTrend6 = {
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
export type CumulativeRateTrend6 =
  | (typeof CumulativeRateTrend6)[keyof typeof CumulativeRateTrend6]
  | (string & {});

export const cumulativeRateTrend6Schema: EnumSchema<CumulativeRateTrend6> =
  s.enumOf<CumulativeRateTrend6>(CumulativeRateTrend6);
