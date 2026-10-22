import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { nodeDtoSchema, type NodeDto } from "./node-dto.js";

export type V3Inventories400Error = {
  /** An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. */
  sku?: string;
  nodes?: NodeDto[];
};

export const v3Inventories400ErrorSchema: Schema<V3Inventories400Error> = s.object<V3Inventories400Error>({
  sku: s.optional(s.string()),
  nodes: s.optional(s.array(s.lazy(() => nodeDtoSchema))),
});
