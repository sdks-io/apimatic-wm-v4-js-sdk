import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fulfillmentOrderSchema, type FulfillmentOrder } from "./fulfillment-order.js";

export type ListAllFulfillmentOrdersResponse = {
  nextToken?: string;
  fulfillmentOrders?: FulfillmentOrder[];
};

export const listAllFulfillmentOrdersResponseSchema: Schema<ListAllFulfillmentOrdersResponse> =
  s.object<ListAllFulfillmentOrdersResponse>({
    nextToken: s.optional(s.string()),
    fulfillmentOrders: s.optional(s.array(s.lazy(() => fulfillmentOrderSchema))),
  });
