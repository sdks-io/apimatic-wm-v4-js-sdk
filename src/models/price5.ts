import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pricingSchema, type Pricing } from "./pricing.js";
import { replaceAllSchema, type ReplaceAll } from "./replace-all.js";

export type Price5 = {
  /** This is applicable only for promotions */
  offerId?: string;
  sku: string;
  /** This is applicable only for promotions */
  replaceAll?: ReplaceAll;
  pricing: Pricing[];
  definitions?: Record<string, unknown>;
};

export const price5Schema: Schema<Price5> = s.object<Price5>({
  offerId: s.optional(s.string()),
  sku: s.string(),
  replaceAll: s.optional(s.lazy(() => replaceAllSchema)),
  pricing: s.array(s.lazy(() => pricingSchema)),
  definitions: s.optional(s.record(s.string(), s.unknown())),
});
