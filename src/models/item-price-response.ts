import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error3Schema, type Error3 } from "./error3.js";

export type ItemPriceResponse = {
  errors?: Error3[];
  statusCode?: number;
  /** Marketplace name. Example: Walmart-US */
  mart?: string;
  /** An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. */
  sku?: string;
  /** A message of acknowledgement for a price update */
  message?: string;
};

export const itemPriceResponseSchema: Schema<ItemPriceResponse> = s.object<ItemPriceResponse>({
  errors: s.optional(s.array(s.lazy(() => error3Schema))),
  statusCode: s.optional(s.int()),
  mart: s.optional(s.string()),
  sku: s.optional(s.string()),
  message: s.optional(s.string()),
});
