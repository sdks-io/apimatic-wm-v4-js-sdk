import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Overall On Time Delivery trand */
export const OverallTrend = {
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
export type OverallTrend = (typeof OverallTrend)[keyof typeof OverallTrend] | (string & {});

export const overallTrendSchema: EnumSchema<OverallTrend> = s.enumOf<OverallTrend>(OverallTrend);
