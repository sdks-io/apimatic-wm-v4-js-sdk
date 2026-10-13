import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Dpi = {
  _203: 203,
  _300: 300,
} as const;
export type Dpi = (typeof Dpi)[keyof typeof Dpi] | (number & {});

export const dpiSchema: EnumSchema<Dpi> = s.enumOf<Dpi>(Dpi);
