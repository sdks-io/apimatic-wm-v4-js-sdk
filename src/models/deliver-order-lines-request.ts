import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deliverOrderLineSchema, type DeliverOrderLine } from "./deliver-order-line.js";

export type DeliverOrderLinesRequest = {
  orderLines: DeliverOrderLine[];
};

export const deliverOrderLinesRequestSchema: Schema<DeliverOrderLinesRequest> =
  s.object<DeliverOrderLinesRequest>({
    orderLines: s.array(s.lazy(() => deliverOrderLineSchema)),
  });
