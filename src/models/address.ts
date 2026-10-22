import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Address object representing a physical location (fulfillment center, return address, or delivery
 * address).
 */
export type Address = {
  /** Name of the primary contact at the address location. */
  contactName: string;
  /** Name of the company or organization at the address location. */
  companyName?: string;
  /** Primary street address line. */
  addressLine1: string;
  /** Additional address details (example, suite or apartment number). */
  addressLine2?: string;
  /** City of the address location. */
  city: string;
  /** State or province of the address. Use the standard two-letter code where applicable. */
  state: string;
  /** ZIP or postal code of the address location. */
  postalCode: string;
  /** Country code of the address location (example, US, MX, CA). */
  country: string;
  /** Phone number associated with the address location. */
  phone: string;
  /** Email address associated with the address location. */
  email?: string;
};

export const addressSchema: Schema<Address> = s.object<Address>({
  contactName: s.string(),
  companyName: s.optional(s.string()),
  addressLine1: s.string(),
  addressLine2: s.optional(s.string()),
  city: s.string(),
  state: s.string(),
  postalCode: s.string(),
  country: s.string(),
  phone: s.string(),
  email: s.optional(s.string()),
});
