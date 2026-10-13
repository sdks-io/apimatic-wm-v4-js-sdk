import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cancellationReasonSchema, type CancellationReason } from "./cancellation-reason.js";
import { quantityWithUnitSchema, type QuantityWithUnit } from "./quantity-with-unit.js";

export type CancelOrderLine = {
  lineNumber: string;
  cancelQuantity?: QuantityWithUnit;
  cancellationReason: CancellationReason;
};

export const cancelOrderLineSchema: Schema<CancelOrderLine> = s.object<CancelOrderLine>({
  lineNumber: s.string(),
  cancelQuantity: s.optional(s.lazy(() => quantityWithUnitSchema)),
  cancellationReason: cancellationReasonSchema,
});
