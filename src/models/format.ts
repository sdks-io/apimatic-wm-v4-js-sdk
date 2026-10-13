import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Format = {
  Pdf: "PDF",
  Png: "PNG",
  Zpl: "ZPL",
  Zpl300: "ZPL300",
  ShippingServiceDefault: "ShippingServiceDefault",
} as const;
export type Format = (typeof Format)[keyof typeof Format] | (string & {});

export const formatSchema: EnumSchema<Format> = s.enumOf<Format>(Format);
