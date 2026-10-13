import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ConditionType = {
  NewNew: "new_new",
  UsedLikeNew: "used_like_new",
  UsedVeryGood: "used_very_good",
  UsedGood: "used_good",
  UsedAcceptable: "used_acceptable",
  CollectibleLikeNew: "collectible_like_new",
  CollectibleVeryGood: "collectible_very_good",
  CollectibleGood: "collectible_good",
  CollectibleAcceptable: "collectible_acceptable",
} as const;
export type ConditionType = (typeof ConditionType)[keyof typeof ConditionType] | (string & {});

export const conditionTypeSchema: EnumSchema<ConditionType> = s.enumOf<ConditionType>(ConditionType);
