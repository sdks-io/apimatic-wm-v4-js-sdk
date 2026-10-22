import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { field12Schema, type Field12 } from "./field12.js";
import { orderSchema, type Order } from "./order.js";

/** Sort request. */
export type SortRequest = {
  /**
   * | Attribute | Description | Data Type |
   * | --- | ----------- | ------- |
   * | ITEM_PRIORITY | Recommended priority of the item by Walmart. | integer |
   * | PRICE | Item price | integer |
   */
  field?: Field12;
  order?: Order;
  /** Sort priority of the specified field. */
  priority?: number;
};

export const sortRequestSchema: Schema<SortRequest> = s.object<SortRequest>({
  field: s.optional(s.lazy(() => field12Schema)),
  order: s.optional(s.lazy(() => orderSchema)),
  priority: s.optional(s.int()),
});
