import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates whether the offer is a B2B or B2C offer. */
export const OfferType = {
  B2C: "B2C",
  B2B: "B2B",
} as const;
export type OfferType = (typeof OfferType)[keyof typeof OfferType] | (string & {});

export const offerTypeSchema: EnumSchema<OfferType> = s.enumOf<OfferType>(OfferType);
