import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Add-ons Type. Add-ons can be opted during label generation for a shipping. Supported values for
 * add-ons are INSURANCE and SIGNATURE. We support standard SIGNATURE Type for now.
 */
export const AddOn = {
  Signature: "SIGNATURE",
  Insurance: "INSURANCE",
} as const;
export type AddOn = (typeof AddOn)[keyof typeof AddOn] | (string & {});

export const addOnSchema: EnumSchema<AddOn> = s.enumOf<AddOn>(AddOn);
