import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Field, fieldSchema } from "./field.js";
import { Order, orderSchema } from "./order.js";

/**
 * Sort configuration for ordering the report results.
 *
 * **Defaults**: field="gmv", order="DESC"
 */
export type WsrSort = {
  /**
   * Attribute on which sorting needs to be performed.
   *
   * **Supported Values**: clicks, gmv, orders **Default**: gmv
   *
   * @default Field.Gmv
   */
  field?: Field;
  /**
   * Sorting order.
   *
   * **Default**: DESC
   *
   * @default Order.Desc
   */
  order?: Order;
};

export const wsrSortSchema: Schema<WsrSort> = s.object<WsrSort>({
  field: s.defaulted(fieldSchema, Field.Gmv),
  order: s.defaulted(orderSchema, Order.Desc),
});
