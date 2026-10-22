import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { nodeDtoSchema, type NodeDto } from "./node-dto.js";

export type InventoriesDto = {
  /** An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. */
  sku?: string;
  nodes?: NodeDto[];
};

export const inventoriesDtoSchema: Schema<InventoriesDto> = s.object<InventoriesDto>({
  sku: s.optional(s.string()),
  nodes: s.optional(s.array(s.lazy(() => nodeDtoSchema))),
});
