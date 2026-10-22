import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  automatedShippingSettingsConfigurationDtoSchema,
  type AutomatedShippingSettingsConfigurationDto,
} from "./automated-shipping-settings-configuration-dto.js";
import { carrierDtoSchema, type CarrierDto } from "./carrier-dto.js";

/** List of Fulfillment Center Ids which are used as shipping nodes. */
export type CarrierConfigDto = {
  isDefault?: boolean;
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

export const carrierConfigDtoSchema: Schema<CarrierConfigDto> = s.object<CarrierConfigDto>({
  isDefault: s.optional(s.boolean()),
  configurations: s.optional(s.array(s.lazy(() => automatedShippingSettingsConfigurationDtoSchema))),
  carriers: s.optional(s.array(s.lazy(() => carrierDtoSchema))),
});
