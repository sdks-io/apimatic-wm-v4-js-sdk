import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { quantityWithUnitSchema, type QuantityWithUnit } from "./quantity-with-unit.js";

export type UpdateShipmentStatusLine = {
  lineNumber: string;
  statusQuantity?: QuantityWithUnit;
};

export const updateShipmentStatusLineSchema: Schema<UpdateShipmentStatusLine> =
  s.object<UpdateShipmentStatusLine>({
    lineNumber: s.string(),
    statusQuantity: s.optional(s.lazy(() => quantityWithUnitSchema)),
  });
