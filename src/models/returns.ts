import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Returns = {
  FullAccess: "full_access",
  ViewOnly: "view_only",
  NoAccess: "no_access",
} as const;
export type Returns = (typeof Returns)[keyof typeof Returns] | (string & {});

export const returnsSchema: EnumSchema<Returns> = s.enumOf<Returns>(Returns);
