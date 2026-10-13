import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { unit2Schema, type Unit2 } from "./unit2.js";

export type QuantityWithUnit = {
  amount?: number;
  unit?: Unit2;
};

export const quantityWithUnitSchema: Schema<QuantityWithUnit> = s.object<QuantityWithUnit>({
  amount: s.optional(s.float64()),
  unit: s.optional(s.lazy(() => unit2Schema)),
});
