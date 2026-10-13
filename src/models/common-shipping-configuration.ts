import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The shipping configurations supported for the packing option. */
export type CommonShippingConfiguration = {
  /**
   * Mode of shipment transportation. Possible values: `GROUND_SMALL_PARCEL`, `FREIGHT_LTL`,
   * `FREIGHT_FTL_PALLET`, `FREIGHT_FTL_NONPALLET`, `OCEAN_LCL`, `OCEAN_FCL`, `AIR_SMALL_PARCEL`,
   * `AIR_SMALL_PARCEL_EXPRESS`.
   */
  shippingMode?: string;
  /**
   * Shipping program for the option. Possible values: `WALMART_PARTNERED_CARRIER`,
   * `USE_YOUR_OWN_CARRIER`.
   */
  shippingSolution?: string;
};

export const commonShippingConfigurationSchema: Schema<CommonShippingConfiguration> =
  s.object<CommonShippingConfiguration>({
    shippingMode: s.optional(s.string()),
    shippingSolution: s.optional(s.string()),
  });
