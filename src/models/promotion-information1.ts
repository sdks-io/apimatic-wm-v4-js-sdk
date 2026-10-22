import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { promotionPlacementSchema, type PromotionPlacement } from "./promotion-placement.js";
import { promotionSettingAction1Schema, type PromotionSettingAction1 } from "./promotion-setting-action1.js";
import { promotionType1Schema, type PromotionType1 } from "./promotion-type1.js";

export type PromotionInformation1 = {
  /**
   * | Market | Translation |
   * | --- | ----------- |
   * | US | ["Create", "Delete","Replace All"]|
   * <br><b style='color:green;'>Market availability: US
   */
  promotionSettingAction?: PromotionSettingAction1;
  /**
   * Controls where discounted price is revealed to customers.<br><b style='color:green;'>Market
   * availability: US
   */
  promotionPlacement?: PromotionPlacement;
  /**
   * | Market | Translation |
   * | --- | ----------- |
   * | US | ["Clearance", "Reduced"]|
   *
   * <br><b style='color:green;'>Market availability: US</b>
   */
  promotionType?: PromotionType1;
  /**
   * Promotion price that you want to set for the SKU..<br> promotionPrice is required for
   * Create.<br><b style='color:green;'>Market availability: US
   */
  promotionPrice?: number;
  /**
   * The effective start date for a given promotion. Time should be specified in the UTC format.<br>
   * promotionPriceStartDateTime is required for Create and Delete. <br><b
   * style='color:green;'>Market availability: US
   */
  promotionPriceStartDateTime?: Date;
  /**
   * The effective end date for a given promotion. Time should be specified in the UTC format.<br>
   * promotionPriceEndDateTime is required for Create and Delete. <br><b style='color:green;'>Market
   * availability: US
   */
  promotionPriceEndDateTime?: Date;
};

export const promotionInformation1Schema: Schema<PromotionInformation1> = s.object<PromotionInformation1>({
  promotionSettingAction: s.optional(s.lazy(() => promotionSettingAction1Schema)),
  promotionPlacement: s.optional(s.lazy(() => promotionPlacementSchema)),
  promotionType: s.optional(s.lazy(() => promotionType1Schema)),
  promotionPrice: s.optional(s.float64()),
  promotionPriceStartDateTime: s.optional(s.dateTime()),
  promotionPriceEndDateTime: s.optional(s.dateTime()),
});
