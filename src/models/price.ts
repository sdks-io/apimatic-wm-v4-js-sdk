import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Price = {
  FullAccess: "full_access",
  ViewOnly: "view_only",
  NoAccess: "no_access",
} as const;
export type Price = (typeof Price)[keyof typeof Price] | (string & {});

export const priceSchema: EnumSchema<Price> = s.enumOf<Price>(Price);
