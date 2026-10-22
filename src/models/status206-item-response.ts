import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** list of ItemResponses */
export type Status206ItemResponse = {
  /** Product id */
  productId?: string;
  /** Product id type */
  productIdType?: string;
  /** Status of the product. */
  status?: string;
  /** The time at which the product was terminated. */
  lastUpdatedDate?: string;
};

export const status206ItemResponseSchema: Schema<Status206ItemResponse> = s.object<Status206ItemResponse>({
  productId: s.optional(s.string()),
  productIdType: s.optional(s.string()),
  status: s.optional(s.string()),
  lastUpdatedDate: s.optional(s.string()),
});
