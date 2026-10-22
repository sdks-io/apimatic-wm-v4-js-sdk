import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { statusQuantitySchema, type StatusQuantity } from "./status-quantity.js";

export type OrderLineStatus = {
  /** The status of the order line */
  status?: string;
  statusQuantity?: StatusQuantity;
};

export const orderLineStatusSchema: Schema<OrderLineStatus> = s.object<OrderLineStatus>({
  status: s.optional(s.string()),
  statusQuantity: s.optional(s.lazy(() => statusQuantitySchema)),
});
