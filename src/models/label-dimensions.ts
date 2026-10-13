import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { unitSchema, type Unit } from "./unit.js";

export type LabelDimensions = {
  length?: number;
  width?: number;
  unit?: Unit;
};

export const labelDimensionsSchema: Schema<LabelDimensions> = s.object<LabelDimensions>({
  length: s.optional(s.float64()),
  width: s.optional(s.float64()),
  unit: s.optional(s.lazy(() => unitSchema)),
});
