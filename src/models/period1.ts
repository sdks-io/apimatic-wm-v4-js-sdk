import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Period1 = {
  Pt5M: "PT5M",
  Pt15M: "PT15M",
  Pt30M: "PT30M",
  P1D: "P1D",
  P2D: "P2D",
  P3D: "P3D",
  Pt1H: "PT1H",
  P7D: "P7D",
  P14D: "P14D",
  P15D: "P15D",
  P18D: "P18D",
  P30D: "P30D",
} as const;
export type Period1 = (typeof Period1)[keyof typeof Period1] | (string & {});

export const period1Schema: EnumSchema<Period1> = s.enumOf<Period1>(Period1);
