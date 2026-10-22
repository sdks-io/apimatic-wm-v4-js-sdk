import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * error Identifiers.
 *
 * <b style="color: green;">Market availability: MX | CL | US</b>
 */
export type ErrorIdentifiers1 = {
  entry?: Record<string, unknown>[];
};

export const errorIdentifiers1Schema: Schema<ErrorIdentifiers1> = s.object<ErrorIdentifiers1>({
  entry: s.optional(s.array(s.record(s.string(), s.unknown()))),
});
