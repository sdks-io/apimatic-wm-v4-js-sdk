import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const LabelFormat = {
  Pdf: "PDF",
  Png: "PNG",
  Zpl: "ZPL",
  Zpl300: "ZPL300",
  ShippingServiceDefault: "ShippingServiceDefault",
} as const;
export type LabelFormat = (typeof LabelFormat)[keyof typeof LabelFormat] | (string & {});

export const labelFormatSchema: EnumSchema<LabelFormat> = s.enumOf<LabelFormat>(LabelFormat);
