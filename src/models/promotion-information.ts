import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { promotionSettingActionSchema, type PromotionSettingAction } from "./promotion-setting-action.js";
import { promotionTypeSchema, type PromotionType } from "./promotion-type.js";

export type PromotionInformation = {
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
   * <br><b style='color:green;'>Market availability: US | CA | MX </b>
   */
  promotionType: PromotionType;
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

export const promotionInformationSchema: Schema<PromotionInformation> = s.object<PromotionInformation>({
  promotionSettingAction: promotionSettingActionSchema,
  promotionType: promotionTypeSchema,
  promotionPrice: s.optional(s.float64()),
  promotionPriceStartDateTime: s.optional(s.dateTime()),
  promotionPriceEndDateTime: s.optional(s.dateTime()),
});
