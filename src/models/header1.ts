import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Response header information. */
export type Header1 = {
  headerAttributes?: Record<string, unknown>;
};

export const header1Schema: Schema<Header1> = s.object<Header1>({
  headerAttributes: s.optional(s.record(s.string(), s.unknown())),
});
