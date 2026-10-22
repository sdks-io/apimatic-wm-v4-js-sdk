import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Rules = {
  FullAccess: "full_access",
  ViewOnly: "view_only",
  NoAccess: "no_access",
} as const;
export type Rules = (typeof Rules)[keyof typeof Rules] | (string & {});

export const rulesSchema: EnumSchema<Rules> = s.enumOf<Rules>(Rules);
