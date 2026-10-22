import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  automatedShippingSettingsConfigurationDtoSchema,
  type AutomatedShippingSettingsConfigurationDto,
} from "./automated-shipping-settings-configuration-dto.js";
import { carrierDtoSchema, type CarrierDto } from "./carrier-dto.js";

/**
 * Defines the carrier configurations used for shipping, like carrier details and their
 * corresponding region coverage..
 */
export type CarrierConfigForGetDto = {
  /**
   * Defines the carrier configurations used for shipping, like carrier details and their
   * corresponding region coverage..
   */
  configurations?: AutomatedShippingSettingsConfigurationDto[];
  /**
   * Defines the carrier configurations used for shipping, like carrier name and carrier service.
   */
  carriers?: CarrierDto[];
};

export const carrierConfigForGetDtoSchema: Schema<CarrierConfigForGetDto> = s.object<CarrierConfigForGetDto>({
  configurations: s.optional(s.array(s.lazy(() => automatedShippingSettingsConfigurationDtoSchema))),
  carriers: s.optional(s.array(s.lazy(() => carrierDtoSchema))),
});
