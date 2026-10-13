import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bulkItemErrorSchema, type BulkItemError } from "./bulk-item-error.js";
import { updateInventoryResponseSchema, type UpdateInventoryResponse } from "./update-inventory-response.js";

export type BulkUpdateInventoryResponse = {
  succeeded?: UpdateInventoryResponse[];
  errors?: BulkItemError[];
};

export const bulkUpdateInventoryResponseSchema: Schema<BulkUpdateInventoryResponse> =
  s.object<BulkUpdateInventoryResponse>({
    succeeded: s.optional(s.array(s.lazy(() => updateInventoryResponseSchema))),
    errors: s.optional(s.array(s.lazy(() => bulkItemErrorSchema))),
  });
