import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cancelOrderLineSchema, type CancelOrderLine } from "./cancel-order-line.js";

export type CancelOrderLinesRequest = {
  orderLines: CancelOrderLine[];
};

export const cancelOrderLinesRequestSchema: Schema<CancelOrderLinesRequest> =
  s.object<CancelOrderLinesRequest>({
    orderLines: s.array(s.lazy(() => cancelOrderLineSchema)),
  });
