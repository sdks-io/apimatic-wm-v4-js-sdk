import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Shipping = {
  FullAccess: "full_access",
  ViewOnly: "view_only",
  NoAccess: "no_access",
} as const;
export type Shipping = (typeof Shipping)[keyof typeof Shipping] | (string & {});

export const shippingSchema: EnumSchema<Shipping> = s.enumOf<Shipping>(Shipping);
