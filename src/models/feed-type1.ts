import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FeedType1 = {
  Inventory: "inventory",
  MpInventory: "MP_INVENTORY",
} as const;
export type FeedType1 = (typeof FeedType1)[keyof typeof FeedType1] | (string & {});

export const feedType1Schema: EnumSchema<FeedType1> = s.enumOf<FeedType1>(FeedType1);
