import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Requirements = {
  Listing: "LISTING",
  ListingProductOnly: "LISTING_PRODUCT_ONLY",
  ListingOfferOnly: "LISTING_OFFER_ONLY",
} as const;
export type Requirements = (typeof Requirements)[keyof typeof Requirements] | (string & {});

export const requirementsSchema: EnumSchema<Requirements> = s.enumOf<Requirements>(Requirements);
