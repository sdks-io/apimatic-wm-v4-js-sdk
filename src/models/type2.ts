import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the error type. */
export const Type2 = {
  DataError: "DATA_ERROR",
  SystemError: "SYSTEM_ERROR",
  TimeoutError: "TIMEOUT_ERROR",
} as const;
export type Type2 = (typeof Type2)[keyof typeof Type2] | (string & {});

export const type2Schema: EnumSchema<Type2> = s.enumOf<Type2>(Type2);
