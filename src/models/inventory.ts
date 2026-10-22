import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Inventory = {
  FullAccess: "full_access",
  ViewOnly: "view_only",
  NoAccess: "no_access",
} as const;
export type Inventory = (typeof Inventory)[keyof typeof Inventory] | (string & {});

export const inventorySchema: EnumSchema<Inventory> = s.enumOf<Inventory>(Inventory);
