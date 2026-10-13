import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ShipOrderLinesResponse = {
  purchaseOrderId?: string;
  shippedAt?: Date;
};

export const shipOrderLinesResponseSchema: Schema<ShipOrderLinesResponse> = s.object<ShipOrderLinesResponse>({
  purchaseOrderId: s.optional(s.string()),
  shippedAt: s.optional(s.dateTime()),
});
