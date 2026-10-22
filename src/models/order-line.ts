import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { orderLineStatusesSchema, type OrderLineStatuses } from "./order-line-statuses.js";

export type OrderLine = {
  /** The order line number */
  lineNumber: string;
  orderLineStatuses: OrderLineStatuses;
};

export const orderLineSchema: Schema<OrderLine> = s.object<OrderLine>({
  lineNumber: s.string(),
  orderLineStatuses: orderLineStatusesSchema,
});
