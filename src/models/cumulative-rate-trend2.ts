import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Cumulative on time shipment rate trend */
export const CumulativeRateTrend2 = {
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
export type CumulativeRateTrend2 =
  | (typeof CumulativeRateTrend2)[keyof typeof CumulativeRateTrend2]
  | (string & {});

export const cumulativeRateTrend2Schema: EnumSchema<CumulativeRateTrend2> =
  s.enumOf<CumulativeRateTrend2>(CumulativeRateTrend2);
