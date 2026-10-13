import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { unit1Schema, type Unit1 } from "./unit1.js";

export type Weight = {
  value: number;
  unit: Unit1;
};

export const weightSchema: Schema<Weight> = s.object<Weight>({
  value: s.float64(),
  unit: unit1Schema,
});
