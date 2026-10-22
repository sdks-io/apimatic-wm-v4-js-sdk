import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Return Address. This is only mandatory field for yanwen */
export type ReturnAddress = {
  /** Contact name */
  contactName: string;
  /** Address Line 1 */
  addressLine1: string;
  /** Address Line 2 */
  addressLine2?: string;
  /** city */
  city: string;
  /** state */
  state: string;
  /** postal code */
  postalCode: string;
  /** country */
  country: string;
  /** phone */
  phone: string;
  /** email */
  email?: string;
  /** ship Node */
  shipNode?: string;
};

export const returnAddressSchema: Schema<ReturnAddress> = s.object<ReturnAddress>({
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
