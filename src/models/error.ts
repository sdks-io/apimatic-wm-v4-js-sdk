import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Error = {
  /** @default "INVALID_REQUEST_HEADER.GMP_GATEWAY_API" */
  code?: string;
  field?: string;
  /** @default "Incorrect Authorization header" */
  description?: string;
  info?: string;
  /** @default "ERROR" */
  severity?: string;
  /** @default "DATA" */
  category?: string;
  causes?: Record<string, unknown>[];
  errorIdentifiers?: Record<string, unknown>;
};

export const errorSchema: Schema<Error> = s.object<Error>({
  code: s.defaulted(s.string(), "INVALID_REQUEST_HEADER.GMP_GATEWAY_API"),
  field: s.optional(s.string()),
  description: s.defaulted(s.string(), "Incorrect Authorization header"),
  info: s.optional(s.string()),
  severity: s.defaulted(s.string(), "ERROR"),
  category: s.defaulted(s.string(), "DATA"),
  causes: s.optional(s.array(s.record(s.string(), s.unknown()))),
  errorIdentifiers: s.optional(s.record(s.string(), s.unknown())),
});
