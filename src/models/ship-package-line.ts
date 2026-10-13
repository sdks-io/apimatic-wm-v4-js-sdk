import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { quantityWithUnitSchema, type QuantityWithUnit } from "./quantity-with-unit.js";

export type ShipPackageLine = {
  lineNumber: string;
  shipQuantity?: QuantityWithUnit;
};

export const shipPackageLineSchema: Schema<ShipPackageLine> = s.object<ShipPackageLine>({
  lineNumber: s.string(),
  shipQuantity: s.optional(s.lazy(() => quantityWithUnitSchema)),
});
