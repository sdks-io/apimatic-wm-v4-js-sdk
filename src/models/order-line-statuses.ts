import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { orderLineStatusSchema, type OrderLineStatus } from "./order-line-status.js";

export type OrderLineStatuses = {
  orderLineStatus?: OrderLineStatus[];
};

export const orderLineStatusesSchema: Schema<OrderLineStatuses> = s.object<OrderLineStatuses>({
  orderLineStatus: s.optional(s.array(s.lazy(() => orderLineStatusSchema))),
});
