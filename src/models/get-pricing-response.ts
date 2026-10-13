import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error3Schema, type Error3 } from "./error3.js";
import { priceSchema, type Price } from "./price.js";

/** The response schema for the getPricing and getCompetitivePricing operations. */
export type GetPricingResponse = {
  /** The payload for the getPricing and getCompetitivePricing operations. */
  payload?: Price[];
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: Error3[];
};

export const getPricingResponseSchema: Schema<GetPricingResponse> = s.object<GetPricingResponse>({
  payload: s.optional(s.array(s.lazy(() => priceSchema))),
  errors: s.optional(s.array(s.lazy(() => error3Schema))),
});
