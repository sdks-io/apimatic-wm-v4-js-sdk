import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { field51Schema, type Field51 } from "./field51.js";
import { orderSchema, type Order } from "./order.js";

/** Sort request.<br><b style='color:green;'>Market availability: US only</b> */
export type Sort1 = {
  /**
   * | Attribute | Description | Data Type |
   * | --- | ----------- | ------- |
   * | ITEM_PRIORITY | Recommended priority of the item by Walmart. | integer |
   * | PRICE | Item price | integer |
   * <br><b style='color:green;'>Market availability: US only</b>
   */
  field?: Field51;
  /** <br><b style='color:green;'>Market availability: US only</b> */
  order?: Order;
  /**
   * Sort priority of the specified field.<br><b style='color:green;'>Market availability: US
   * only</b>
   */
  priority?: number;
};

export const sort1Schema: Schema<Sort1> = s.object<Sort1>({
  field: s.optional(s.lazy(() => field51Schema)),
  order: s.optional(s.lazy(() => orderSchema)),
  priority: s.optional(s.int()),
});
