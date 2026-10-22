import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * AddOns Type. AddOns can be opted during label generation for a shipping. Supported values for
 * AddOns are INSURANCE and SIGNATURE. We support standard SIGNATURE Type for now.
 */
export const AddOn7 = {
  Signature: "SIGNATURE",
  Insurance: "INSURANCE",
} as const;
export type AddOn7 = (typeof AddOn7)[keyof typeof AddOn7] | (string & {});

export const addOn7Schema: EnumSchema<AddOn7> = s.enumOf<AddOn7>(AddOn7);
