import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Preparation instructions for shipping an item to Walmart's fulfillment network. */
export const CommonPrepType = {
  ItemBlackShrinkwrap: "ITEM_BLACK_SHRINKWRAP",
  ItemBlankstk: "ITEM_BLANKSTK",
  ItemBoxing: "ITEM_BOXING",
  ItemBubblewrap: "ITEM_BUBBLEWRAP",
  ItemCapSealing: "ITEM_CAP_SEALING",
  ItemDebundle: "ITEM_DEBUNDLE",
  ItemHangGarment: "ITEM_HANG_GARMENT",
  ItemLabeling: "ITEM_LABELING",
  ItemNoPrep: "ITEM_NO_PREP",
  ItemPolybagging: "ITEM_POLYBAGGING",
  ItemRmovhang: "ITEM_RMOVHANG",
  ItemSetcreat: "ITEM_SETCREAT",
  ItemSetstk: "ITEM_SETSTK",
  ItemSioc: "ITEM_SIOC",
  ItemSuffostk: "ITEM_SUFFOSTK",
  ItemTaping: "ITEM_TAPING",
} as const;
export type CommonPrepType = (typeof CommonPrepType)[keyof typeof CommonPrepType] | (string & {});

export const commonPrepTypeSchema: EnumSchema<CommonPrepType> = s.enumOf<CommonPrepType>(CommonPrepType);
