import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Meta = {
  /** Total number of Skus of the Seller. Example: '235' */
  totalCount?: number;
  /** Used for pagination to fetch the next set of items. */
  nextCursor?: string;
};

export const metaSchema: Schema<Meta> = s.object<Meta>({
  totalCount: s.optional(s.float64()),
  nextCursor: s.optional(s.string()),
});
