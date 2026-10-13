import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The owner of the preparations, if special preparations are required. */
export const CommonPrepOwner = {
  Seller: "SELLER",
  None: "NONE",
} as const;
export type CommonPrepOwner = (typeof CommonPrepOwner)[keyof typeof CommonPrepOwner] | (string & {});

export const commonPrepOwnerSchema: EnumSchema<CommonPrepOwner> = s.enumOf<CommonPrepOwner>(CommonPrepOwner);
