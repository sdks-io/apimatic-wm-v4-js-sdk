import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Requirements, requirementsSchema } from "./requirements.js";

export type ListingsItemPutRequest = {
  /** Walmart product type for the listing */
  productType: string;
  /** @default Requirements.Listing */
  requirements?: Requirements;
  /** JSON object of product attributes matching the product type definition schema */
  attributes: Record<string, unknown>;
};

export const listingsItemPutRequestSchema: Schema<ListingsItemPutRequest> = s.object<ListingsItemPutRequest>({
  productType: s.string(),
  requirements: s.defaulted(requirementsSchema, Requirements.Listing),
  attributes: s.record(s.string(), s.unknown()),
});
