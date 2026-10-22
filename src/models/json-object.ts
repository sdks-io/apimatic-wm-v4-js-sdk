import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * content of the CSV file in the list format, each element in the list represents the row in CSV
 * file.
 */
export type JsonObject = {
  empty?: boolean;
};

export const jsonObjectSchema: Schema<JsonObject> = s.object<JsonObject>({
  empty: s.optional(s.boolean()),
});
