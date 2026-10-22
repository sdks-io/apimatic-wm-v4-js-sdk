import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information of item recommendations based on the categorizationType. */
export type CategorizationFacet = {
  /** Name of the brand or category as per the categorizationType. */
  name?: string;
  /**
   * The number of item recommendations associated with the name. The name can be associated with
   * the categorization type.
   */
  numberOfItemRecommendations?: number;
};

export const categorizationFacetSchema: Schema<CategorizationFacet> = s.object<CategorizationFacet>({
  name: s.optional(s.string()),
  numberOfItemRecommendations: s.optional(s.int()),
});
