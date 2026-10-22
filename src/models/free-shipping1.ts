import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates if the shipping is free for a recommended item which is a buy box winner. */
export const FreeShipping1 = {
  Yes: "YES",
  No: "NO",
} as const;
export type FreeShipping1 = (typeof FreeShipping1)[keyof typeof FreeShipping1] | (string & {});

export const freeShipping1Schema: EnumSchema<FreeShipping1> = s.enumOf<FreeShipping1>(FreeShipping1);
