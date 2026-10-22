import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** carriers */
export type CarrierResponse = {
  /** The carrier ID. A unique identifier for the carrier. */
  carrierId?: string;
  /**
   * The carrier short name. Pass this value as `carrierName` in the Create label and Shipping
   * estimates APIs.
   */
  shortName?: string;
  /** The carrier display name. */
  carrierName?: string;
};

export const carrierResponseSchema: Schema<CarrierResponse> = s.object<CarrierResponse>({
  carrierId: s.optional(s.string()),
  shortName: s.optional(s.string()),
  carrierName: s.optional(s.string()),
});
