import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { carrierConfigDtoSchema, type CarrierConfigDto } from "./carrier-config-dto.js";

/**
 * Account configuration to be set for a seller, comprising of Carrier configurations and Region
 * configurations.
 */
export type SimplifiedAccountConfigForUpdateDto = {
  /** Flag used to migrate/not migrate all the eligible offers for a seller. */
  migrateEligibleOffers?: boolean;
  /**
   * Defines the carrier configurations used for shipping, like carrier details and their
   * corresponding region coverage..
   */
  carrierConfigs?: CarrierConfigDto[];
};

export const simplifiedAccountConfigForUpdateDtoSchema: Schema<SimplifiedAccountConfigForUpdateDto> =
  s.object<SimplifiedAccountConfigForUpdateDto>({
    migrateEligibleOffers: s.optional(s.boolean()),
    carrierConfigs: s.optional(s.array(s.lazy(() => carrierConfigDtoSchema))),
  });
