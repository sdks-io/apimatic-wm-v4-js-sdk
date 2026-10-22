import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Reports = {
  FullAccess: "full_access",
  ViewOnly: "view_only",
  NoAccess: "no_access",
} as const;
export type Reports = (typeof Reports)[keyof typeof Reports] | (string & {});

export const reportsSchema: EnumSchema<Reports> = s.enumOf<Reports>(Reports);
