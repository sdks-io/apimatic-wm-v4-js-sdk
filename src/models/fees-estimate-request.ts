import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  optionalFulfillmentProgramSchema,
  type OptionalFulfillmentProgram,
} from "./optional-fulfillment-program.js";
import { priceToEstimateFeesSchema, type PriceToEstimateFees } from "./price-to-estimate-fees.js";

/**
 * Fee estimate parameters for a single item. Used in both single-item and batch endpoints. Mirrors
 * SP-API FeesEstimateRequest.
 */
export type FeesEstimateRequest = {
  /** Marketplace identifier. */
  marketplaceId: string;
  /** true if fulfilled by Walmart Fulfillment Services (WFS); false for seller-fulfilled. */
  isWalmartFulfilled: boolean;
  /** Price information used to estimate fees. */
  priceToEstimateFees: PriceToEstimateFees;
  /** A caller-supplied identifier echoed back in the response for correlation. */
  identifier?: string;
  /** Optional fulfillment program override for WFS items. */
  optionalFulfillmentProgram?: OptionalFulfillmentProgram;
};

export const feesEstimateRequestSchema: Schema<FeesEstimateRequest> = s.object<FeesEstimateRequest>({
  marketplaceId: s.string(),
  isWalmartFulfilled: s.boolean(),
  priceToEstimateFees: priceToEstimateFeesSchema,
  identifier: s.optional(s.string()),
  optionalFulfillmentProgram: s.optional(s.lazy(() => optionalFulfillmentProgramSchema)),
  _keysMap: {
    marketplaceId: "MarketplaceId",
    isWalmartFulfilled: "IsWalmartFulfilled",
    priceToEstimateFees: "PriceToEstimateFees",
    identifier: "Identifier",
    optionalFulfillmentProgram: "OptionalFulfillmentProgram",
  },
});
