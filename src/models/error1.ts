import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Error1 = {
  /** @default "INVALID_REQUEST_HEADER.GMP_GATEWAY_API" */
  code?: string;
  info?: string;
  /** @default "ERROR" */
  severity?: string;
  /** @default "DATA" */
  category?: string;
  causes?: Record<string, unknown>[];
  errorIdentifiers?: Record<string, unknown>;
};

export const error1Schema: Schema<Error1> = s.object<Error1>({
  code: s.defaulted(s.string(), "INVALID_REQUEST_HEADER.GMP_GATEWAY_API"),
  info: s.optional(s.string()),
  severity: s.defaulted(s.string(), "ERROR"),
  category: s.defaulted(s.string(), "DATA"),
  causes: s.optional(s.array(s.record(s.string(), s.unknown()))),
  errorIdentifiers: s.optional(s.record(s.string(), s.unknown())),
});
