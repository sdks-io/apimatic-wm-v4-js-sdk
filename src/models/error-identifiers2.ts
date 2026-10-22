import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * error Identifiers.
 *
 * <b style="color: green;">Market availability: CL only</b>
 */
export type ErrorIdentifiers2 = {
  entry?: Record<string, unknown>[];
};

export const errorIdentifiers2Schema: Schema<ErrorIdentifiers2> = s.object<ErrorIdentifiers2>({
  entry: s.optional(s.array(s.record(s.string(), s.unknown()))),
});
