import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { nodeDtoSchema, type NodeDto } from "./node-dto.js";

export type V3Inventories404Error = {
  /** An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. */
  sku?: string;
  nodes?: NodeDto[];
};

export const v3Inventories404ErrorSchema: Schema<V3Inventories404Error> = s.object<V3Inventories404Error>({
  sku: s.optional(s.string()),
  nodes: s.optional(s.array(s.lazy(() => nodeDtoSchema))),
});
