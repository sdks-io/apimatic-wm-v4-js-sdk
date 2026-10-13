import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The page type to use to print the labels. */
export const CommonItemLabelPageType = {
  A421: "A4_21",
  A424: "A4_24",
  A42464X33: "A4_24_64x33",
  A42466X35: "A4_24_66x35",
  A42470X36: "A4_24_70x36",
  A42470X37: "A4_24_70x37",
  A424I: "A4_24i",
  A427: "A4_27",
  A44052X29: "A4_40_52x29",
  A44448X25: "A4_44_48x25",
  Letter30: "Letter_30",
} as const;
export type CommonItemLabelPageType =
  | (typeof CommonItemLabelPageType)[keyof typeof CommonItemLabelPageType]
  | (string & {});

export const commonItemLabelPageTypeSchema: EnumSchema<CommonItemLabelPageType> =
  s.enumOf<CommonItemLabelPageType>(CommonItemLabelPageType);
