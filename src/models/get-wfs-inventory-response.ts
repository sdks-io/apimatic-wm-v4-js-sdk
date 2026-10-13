import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pagination4Schema, type Pagination4 } from "./pagination4.js";
import { wfsItemSchema, type WfsItem } from "./wfs-item.js";

export type GetWfsInventoryResponse = {
  pagination?: Pagination4;
  inventorySummaries?: WfsItem[];
};

export const getWfsInventoryResponseSchema: Schema<GetWfsInventoryResponse> =
  s.object<GetWfsInventoryResponse>({
    pagination: s.optional(s.lazy(() => pagination4Schema)),
    inventorySummaries: s.optional(s.array(s.lazy(() => wfsItemSchema))),
  });
