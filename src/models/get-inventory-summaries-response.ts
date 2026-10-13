import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { inventorySummarySchema, type InventorySummary } from "./inventory-summary.js";
import { pagination4Schema, type Pagination4 } from "./pagination4.js";

export type GetInventorySummariesResponse = {
  pagination?: Pagination4;
  inventorySummaries?: InventorySummary[];
};

export const getInventorySummariesResponseSchema: Schema<GetInventorySummariesResponse> =
  s.object<GetInventorySummariesResponse>({
    pagination: s.optional(s.lazy(() => pagination4Schema)),
    inventorySummaries: s.optional(s.array(s.lazy(() => inventorySummarySchema))),
  });
