import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * error Identifiers.
 *
 * <b style="color: green;">Market availability: US | CA | MX</b>
 */
export type ErrorIdentifiers11 = {
  entry?: Record<string, unknown>[];
};

export const errorIdentifiers11Schema: Schema<ErrorIdentifiers11> = s.object<ErrorIdentifiers11>({
  entry: s.optional(s.array(s.record(s.string(), s.unknown()))),
});
