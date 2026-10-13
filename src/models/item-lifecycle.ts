import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Lifecycle state of the item in the Walmart catalog. */
export const ItemLifecycle = {
  Active: "Active",
  Retired: "Retired",
  Archived: "Archived",
} as const;
export type ItemLifecycle = (typeof ItemLifecycle)[keyof typeof ItemLifecycle] | (string & {});

export const itemLifecycleSchema: EnumSchema<ItemLifecycle> = s.enumOf<ItemLifecycle>(ItemLifecycle);
