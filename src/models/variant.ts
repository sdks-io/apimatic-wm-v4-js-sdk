import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Variant = {
  Main: "MAIN",
  Pt01: "PT01",
  Pt02: "PT02",
  Pt03: "PT03",
  Pt04: "PT04",
  Swch: "SWCH",
} as const;
export type Variant = (typeof Variant)[keyof typeof Variant] | (string & {});

export const variantSchema: EnumSchema<Variant> = s.enumOf<Variant>(Variant);
