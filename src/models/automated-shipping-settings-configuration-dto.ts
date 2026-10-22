import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressTypeSchema, type AddressType } from "./address-type.js";
import { regionDtoSchema, type RegionDto } from "./region-dto.js";

/**
 * Defines the carrier configurations used for shipping, like carrier details and their
 * corresponding region coverage..
 */
export type AutomatedShippingSettingsConfigurationDto = {
  /** Region configurations to which shipping has to be covered with added carriers. */
  regions?: RegionDto[];
  /**
   * Type of address to which shipping has to be covered as part of mentioned region, sub region and
   * states.
   */
  addressTypes?: AddressType[];
};

export const automatedShippingSettingsConfigurationDtoSchema: Schema<AutomatedShippingSettingsConfigurationDto> =
  s.object<AutomatedShippingSettingsConfigurationDto>({
    regions: s.optional(s.array(s.lazy(() => regionDtoSchema))),
    addressTypes: s.optional(s.array(s.lazy(() => addressTypeSchema))),
  });
