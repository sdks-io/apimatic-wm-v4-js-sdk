import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  updateInventoriesResponseNodeDtoSchema,
  type UpdateInventoriesResponseNodeDto,
} from "./update-inventories-response-node-dto.js";

export type V3Inventories404Error2 = {
  /** An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. */
  sku?: string;
  nodes?: UpdateInventoriesResponseNodeDto[];
};

export const v3Inventories404Error2Schema: Schema<V3Inventories404Error2> = s.object<V3Inventories404Error2>({
  sku: s.optional(s.string()),
  nodes: s.optional(s.array(s.lazy(() => updateInventoriesResponseNodeDtoSchema))),
});
