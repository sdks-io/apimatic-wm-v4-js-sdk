import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ConditionType1 = {
  NewNew: "new_new",
  UsedLikeNew: "used_like_new",
  UsedVeryGood: "used_very_good",
  UsedGood: "used_good",
  UsedAcceptable: "used_acceptable",
  CollectibleLikeNew: "collectible_like_new",
  CollectibleVeryGood: "collectible_very_good",
  CollectibleGood: "collectible_good",
  CollectibleAcceptable: "collectible_acceptable",
  RefurbishedRefurbished: "refurbished_refurbished",
} as const;
export type ConditionType1 = (typeof ConditionType1)[keyof typeof ConditionType1] | (string & {});

export const conditionType1Schema: EnumSchema<ConditionType1> = s.enumOf<ConditionType1>(ConditionType1);
