import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Address = {
  name: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  stateOrRegion: string;
  postalCode: string;
  /** @default "US" */
  countryCode?: string;
  phone?: string;
};

export const addressSchema: Schema<Address> = s.object<Address>({
  name: s.string(),
  addressLine1: s.string(),
  addressLine2: s.optional(s.string()),
  city: s.string(),
  stateOrRegion: s.string(),
  postalCode: s.string(),
  countryCode: s.defaulted(s.string(), "US"),
  phone: s.optional(s.string()),
});
