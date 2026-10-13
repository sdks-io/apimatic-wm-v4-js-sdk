import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Specific details to identify a place. */
export type CommonAddress = {
  /** Street address information. */
  addressLine1: string;
  /** Additional street address information. */
  addressLine2?: string;
  /** The city. */
  city: string;
  /** The name of the business. */
  companyName?: string;
  /** The country code in two-character ISO 3166-1 alpha-2 format. */
  countryCode: string;
  /** The district or county. */
  districtOrCounty?: string;
  /** The email address. */
  email?: string;
  /** The name of the individual who is the primary contact. */
  name: string;
  /** The phone number. */
  phoneNumber?: string;
  /** The postal code. */
  postalCode: string;
  /** The state or province code. */
  stateOrProvinceCode?: string;
};

export const commonAddressSchema: Schema<CommonAddress> = s.object<CommonAddress>({
  addressLine1: s.string(),
  addressLine2: s.optional(s.string()),
  city: s.string(),
  companyName: s.optional(s.string()),
  countryCode: s.string(),
  districtOrCounty: s.optional(s.string()),
  email: s.optional(s.string()),
  name: s.string(),
  phoneNumber: s.optional(s.string()),
  postalCode: s.string(),
  stateOrProvinceCode: s.optional(s.string()),
});
