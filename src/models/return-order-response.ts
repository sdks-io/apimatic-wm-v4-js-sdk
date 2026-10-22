import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { meta1Schema, type Meta1 } from "./meta1.js";
import { returnOrderSchema, type ReturnOrder } from "./return-order.js";

export type ReturnOrderResponse = {
  meta?: Meta1;
  /** List of returns for the seller.<br><b style='color:green;'>Market availability: Global</b> */
  returnOrders?: ReturnOrder[];
};

export const returnOrderResponseSchema: Schema<ReturnOrderResponse> = s.object<ReturnOrderResponse>({
  meta: s.optional(s.lazy(() => meta1Schema)),
  returnOrders: s.optional(s.array(s.lazy(() => returnOrderSchema))),
});
