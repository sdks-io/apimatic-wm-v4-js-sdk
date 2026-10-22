import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { order1Schema, type Order1 } from "./order1.js";

/**
 * Sorting configuration for ordering search results.
 *
 * Both `field` and `order` are required when the `sort` object is provided.
 */
export type RecommendationsSort = {
  /** Field by which the results should be sorted. @default "adspend" */
  field?: "adspend";
  /** Sort direction. */
  order: Order1;
};

export const recommendationsSortSchema: Schema<RecommendationsSort> = s.object<RecommendationsSort>({
  field: s.defaulted(s.literal("adspend"), "adspend"),
  order: order1Schema,
});
