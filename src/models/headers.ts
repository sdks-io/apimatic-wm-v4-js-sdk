import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Headers = {
  /** Total number of results for query. */
  totalCount?: number;
  /** Information about the quantity in inventory. */
  limit?: number;
  /** Offset is the number of records you wish to skip before selecting results. */
  offset?: number;
};

export const headersSchema: Schema<Headers> = s.object<Headers>({
  totalCount: s.optional(s.int()),
  limit: s.optional(s.int()),
  offset: s.optional(s.int()),
});
