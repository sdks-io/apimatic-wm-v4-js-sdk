import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { promotionSettingActionSchema, type PromotionSettingAction } from "./promotion-setting-action.js";
import { promotionType2Schema, type PromotionType2 } from "./promotion-type2.js";

export type PromotionInformation2 = {
  /**
   * | Market | Translation |
   * | --- | ----------- |
   * | CA  | ["Create", "Delete","Replace All"]|
   * | MX & CL | ["Crear", "Eliminar","Reemplazar todo"]|
   *
   * <br><b style='color:green;'>Market availability: CA | MX | CL
   */
  promotionSettingAction: PromotionSettingAction;
  /**
   * | Market | Translation |
   * | --- | ----------- |
   * | CA  | ["Clearance", "Reduced"]|
   * | MX | ["Rebaja", "Liquidación"]|
   *
   * <br><b style='color:green;'>Market availability: CA | MX </b>
   */
  promotionType: PromotionType2;
  /**
   * Promotion price that you want to set for the SKU.<br> promotionPrice is required for
   * Create.<br><b style='color:green;'>Market availability: CA | MX | CL
   */
  promotionPrice?: number;
  /**
   * The effective start date for a given promotion. Time should be specified in the UTC format.<br>
   * promotionPriceStartDateTime is required for Create and Delete. <br><b
   * style='color:green;'>Market availability: CA | MX | CL
   */
  promotionPriceStartDateTime?: Date;
  /**
   * The effective end date for a given promotion. Time should be specified in the UTC format.<br>
   * promotionPriceEndDateTime is required for Create and Delete. <br><b style='color:green;'>Market
   * availability: CA | MX | CL
   */
  promotionPriceEndDateTime?: Date;
};

export const promotionInformation2Schema: Schema<PromotionInformation2> = s.object<PromotionInformation2>({
  promotionSettingAction: promotionSettingActionSchema,
  promotionType: promotionType2Schema,
  promotionPrice: s.optional(s.float64()),
  promotionPriceStartDateTime: s.optional(s.dateTime()),
  promotionPriceEndDateTime: s.optional(s.dateTime()),
});
