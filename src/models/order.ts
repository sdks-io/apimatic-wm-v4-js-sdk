import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Sorting order.
 *
 * **Default**: DESC, <br><b style='color:green;'>Market availability: US only</b>
 */
export const Order = {
  Asc: "ASC",
  Desc: "DESC",
} as const;
export type Order = (typeof Order)[keyof typeof Order] | (string & {});

export const orderSchema: EnumSchema<Order> = s.enumOf<Order>(Order);
