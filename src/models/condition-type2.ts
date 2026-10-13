import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates the condition of the item. Possible values: New, Used, Collectible, Refurbished, Club.
 */
export const ConditionType2 = {
  New: "New",
  Used: "Used",
  Collectible: "Collectible",
  Refurbished: "Refurbished",
  Club: "Club",
} as const;
export type ConditionType2 = (typeof ConditionType2)[keyof typeof ConditionType2] | (string & {});

export const conditionType2Schema: EnumSchema<ConditionType2> = s.enumOf<ConditionType2>(ConditionType2);
