import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Response header information. */
export type Header = {
  headerAttributes?: Record<string, unknown>;
};

export const headerSchema: Schema<Header> = s.object<Header>({
  headerAttributes: s.optional(s.record(s.string(), s.unknown())),
});
