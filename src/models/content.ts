import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Content = {
  FullAccess: "full_access",
  ViewOnly: "view_only",
  NoAccess: "no_access",
} as const;
export type Content = (typeof Content)[keyof typeof Content] | (string & {});

export const contentSchema: EnumSchema<Content> = s.enumOf<Content>(Content);
