import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * | Market | Translation |
 * | --- | ----------- |
 * | US | ["Create", "Delete","Replace All"]|
 * <br><b style='color:green;'>Market availability: US
 */
export const PromotionSettingAction1 = {
  Create: "Create",
  Delete: "Delete",
  ReplaceAll: "Replace All",
} as const;
export type PromotionSettingAction1 =
  | (typeof PromotionSettingAction1)[keyof typeof PromotionSettingAction1]
  | (string & {});

export const promotionSettingAction1Schema: EnumSchema<PromotionSettingAction1> =
  s.enumOf<PromotionSettingAction1>(PromotionSettingAction1);
