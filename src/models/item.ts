import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Item = {
  FullAccess: "full_access",
  ViewOnly: "view_only",
  NoAccess: "no_access",
} as const;
export type Item = (typeof Item)[keyof typeof Item] | (string & {});

export const itemSchema: EnumSchema<Item> = s.enumOf<Item>(Item);
