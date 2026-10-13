import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BulkItemError = {
  sellerSku?: string;
  code?: string;
  message?: string;
};

export const bulkItemErrorSchema: Schema<BulkItemError> = s.object<BulkItemError>({
  sellerSku: s.optional(s.string()),
  code: s.optional(s.string()),
  message: s.optional(s.string()),
});
