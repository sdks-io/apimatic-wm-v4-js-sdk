import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Address2 = {
  name?: string;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  /** @default "US" */
  country?: string;
};

export const address2Schema: Schema<Address2> = s.object<Address2>({
  name: s.optional(s.string()),
  addressLine1: s.optional(s.string()),
  addressLine2: s.optional(s.string()),
  city: s.optional(s.string()),
  state: s.optional(s.string()),
  postalCode: s.optional(s.string()),
  country: s.defaulted(s.string(), "US"),
});
