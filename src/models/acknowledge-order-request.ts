import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { acknowledgeOrderLineSchema, type AcknowledgeOrderLine } from "./acknowledge-order-line.js";

export type AcknowledgeOrderRequest = {
  orderLines: AcknowledgeOrderLine[];
};

export const acknowledgeOrderRequestSchema: Schema<AcknowledgeOrderRequest> =
  s.object<AcknowledgeOrderRequest>({
    orderLines: s.array(s.lazy(() => acknowledgeOrderLineSchema)),
  });
