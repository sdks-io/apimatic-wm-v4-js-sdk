import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { unitSchema, type Unit } from "./unit.js";

export type PackageDimensions = {
  length: number;
  width: number;
  height: number;
  unit: Unit;
};

export const packageDimensionsSchema: Schema<PackageDimensions> = s.object<PackageDimensions>({
  length: s.float64(),
  width: s.float64(),
  height: s.float64(),
  unit: unitSchema,
});
