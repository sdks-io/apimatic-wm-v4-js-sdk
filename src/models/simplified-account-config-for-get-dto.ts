import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { carrierConfigForGetDtoSchema, type CarrierConfigForGetDto } from "./carrier-config-for-get-dto.js";
import { shippingPrioritySchema, type ShippingPriority } from "./shipping-priority.js";

/**
 * Account configuration to be set for a seller, comprising of Carrier configurations and Region
 * configurations.
 */
export type SimplifiedAccountConfigForGetDto = {
  /**
   * Shipping priority will help system decide the carrier service for fulfillment in case there are
   * multiple shipping options available for customers with different carrier services in terms of
   * shipping cost and speed.
   */
  shippingPriority?: ShippingPriority;
  /** Flag used to migrate/not migrate all the eligible offers for a seller. */
  migrateEligibleOffers?: boolean;
  /**
   * Defines the carrier configurations used for shipping, like carrier details and their
   * corresponding region coverage..
   */
  carrierConfigs?: CarrierConfigForGetDto[];
};

export const simplifiedAccountConfigForGetDtoSchema: Schema<SimplifiedAccountConfigForGetDto> =
  s.object<SimplifiedAccountConfigForGetDto>({
    shippingPriority: s.optional(s.lazy(() => shippingPrioritySchema)),
    migrateEligibleOffers: s.optional(s.boolean()),
    carrierConfigs: s.optional(s.array(s.lazy(() => carrierConfigForGetDtoSchema))),
  });
