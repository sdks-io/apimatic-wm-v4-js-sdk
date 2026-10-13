import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Item condition. */
export const Condition = {
  NewItem: "NewItem",
  UsedLikeNew: "UsedLikeNew",
  UsedVeryGood: "UsedVeryGood",
  UsedGood: "UsedGood",
  UsedAcceptable: "UsedAcceptable",
  CollectibleLikeNew: "CollectibleLikeNew",
  CollectibleVeryGood: "CollectibleVeryGood",
  CollectibleGood: "CollectibleGood",
  CollectibleAcceptable: "CollectibleAcceptable",
  RefurbishedWithWarranty: "RefurbishedWithWarranty",
  Refurbished: "Refurbished",
  ClubItem: "ClubItem",
} as const;
export type Condition = (typeof Condition)[keyof typeof Condition] | (string & {});

export const conditionSchema: EnumSchema<Condition> = s.enumOf<Condition>(Condition);
