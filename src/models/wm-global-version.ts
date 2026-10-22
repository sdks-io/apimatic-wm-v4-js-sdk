import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const WmGlobalVersion = {
  /** API version 3.1. */
  _31: "3.1",
} as const;
export type WmGlobalVersion = (typeof WmGlobalVersion)[keyof typeof WmGlobalVersion] | (string & {});

export const wmGlobalVersionSchema: EnumSchema<WmGlobalVersion> = s.enumOf<WmGlobalVersion>(WmGlobalVersion);
