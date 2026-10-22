import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Severity level of the error. */
export const Severity1 = {
  Emerg: "EMERG",
  Alert: "ALERT",
  Critical: "CRITICAL",
  Error: "ERROR",
  Warn: "WARN",
} as const;
export type Severity1 = (typeof Severity1)[keyof typeof Severity1] | (string & {});

export const severity1Schema: EnumSchema<Severity1> = s.enumOf<Severity1>(Severity1);
