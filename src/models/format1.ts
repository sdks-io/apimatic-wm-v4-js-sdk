import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Format1 = {
  Pdf: "PDF",
  Png: "PNG",
  Zpl203: "ZPL203",
  Zpl300: "ZPL300",
} as const;
export type Format1 = (typeof Format1)[keyof typeof Format1] | (string & {});

export const format1Schema: EnumSchema<Format1> = s.enumOf<Format1>(Format1);
