import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pricingTypeSchema, type PricingType } from "./pricing-type.js";

export type PricingListType = {
  replaceAll?: boolean;
  pricing: PricingType[];
};

export const pricingListTypeSchema: Schema<PricingListType> = s.object<PricingListType>({
  replaceAll: s.optional(s.boolean()),
  pricing: s.array(s.lazy(() => pricingTypeSchema)),
});
