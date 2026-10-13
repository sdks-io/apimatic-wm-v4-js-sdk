import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { quantityWithUnitSchema, type QuantityWithUnit } from "./quantity-with-unit.js";

export type AcknowledgeOrderLine = {
  lineNumber: string;
  /** @default "Acknowledged" */
  statusCode?: "Acknowledged";
  statusQuantity?: QuantityWithUnit;
};

export const acknowledgeOrderLineSchema: Schema<AcknowledgeOrderLine> = s.object<AcknowledgeOrderLine>({
  lineNumber: s.string(),
  statusCode: s.defaulted(s.literal("Acknowledged"), "Acknowledged"),
  statusQuantity: s.optional(s.lazy(() => quantityWithUnitSchema)),
});
