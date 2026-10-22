import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** gmv Loss trend */
export const GmvLossTrend = {
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
export type GmvLossTrend = (typeof GmvLossTrend)[keyof typeof GmvLossTrend] | (string & {});

export const gmvLossTrendSchema: EnumSchema<GmvLossTrend> = s.enumOf<GmvLossTrend>(GmvLossTrend);
