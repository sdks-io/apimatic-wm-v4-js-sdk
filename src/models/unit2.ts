import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Unit2 = {
  Ea: "EA",
  Each: "EACH",
  Case: "CASE",
  Carton: "CARTON",
} as const;
export type Unit2 = (typeof Unit2)[keyof typeof Unit2] | (string & {});

export const unit2Schema: EnumSchema<Unit2> = s.enumOf<Unit2>(Unit2);
