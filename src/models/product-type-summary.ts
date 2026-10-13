import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ProductTypeSummary = {
  name?: string;
  displayName?: string;
  marketplaceIds?: string[];
};

export const productTypeSummarySchema: Schema<ProductTypeSummary> = s.object<ProductTypeSummary>({
  name: s.optional(s.string()),
  displayName: s.optional(s.string()),
  marketplaceIds: s.optional(s.array(s.string())),
});
