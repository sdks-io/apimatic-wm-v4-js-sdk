import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Return Address. This parameter is mandatory for orders using `Yanwen` for the carrier.
 *
 * <b style="color: green;">Market availability: US only</b>
 */
export type ReturnAddress1 = {
  /** The name of the primary contact at the return address location. */
  contactName: string;
  /** Primary street address of the return location. */
  addressLine1: string;
  /**
   * The additional address details for the return location (example, suite or apartment number).
   */
  addressLine2?: string;
  /** City of the return address location. */
  city: string;
  /** State or province of the return address. Use the standard two-letter code where applicable. */
  state: string;
  /** ZIP or postal code of the return address location. */
  postalCode: string;
  /** Country code of the return address location (example, US, CN). */
  country: string;
  /** Phone number associated with the return address location. */
  phone: string;
  /** Email address associated with the return address location. */
  email?: string;
  /** Seller's ship node identifier associated with the return location. */
  shipNode?: string;
};

export const returnAddress1Schema: Schema<ReturnAddress1> = s.object<ReturnAddress1>({
  contactName: s.string(),
  addressLine1: s.string(),
  addressLine2: s.optional(s.string()),
  city: s.string(),
  state: s.string(),
  postalCode: s.string(),
  country: s.string(),
  phone: s.string(),
  email: s.optional(s.string()),
  shipNode: s.optional(s.string()),
});
