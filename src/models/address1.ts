import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Address1 = {
  name: string;
  addressLine1: string;
  addressLine2?: string;
  addressLine3?: string;
  city: string;
  county?: string;
  district?: string;
  stateOrRegion: string;
  municipality?: string;
  postalCode: string;
  /** @default "US" */
  countryCode?: string;
  phone?: string;
  isCommercialAddress?: boolean;
};

export const address1Schema: Schema<Address1> = s.object<Address1>({
  name: s.string(),
  addressLine1: s.string(),
  addressLine2: s.optional(s.string()),
  addressLine3: s.optional(s.string()),
  city: s.string(),
  county: s.optional(s.string()),
  district: s.optional(s.string()),
  stateOrRegion: s.string(),
  municipality: s.optional(s.string()),
  postalCode: s.string(),
  countryCode: s.defaulted(s.string(), "US"),
  phone: s.optional(s.string()),
  isCommercialAddress: s.optional(s.boolean()),
});
