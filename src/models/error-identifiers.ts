import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** <br><b style='color:green;'>Market availability: Global</b> */
export type ErrorIdentifiers = {
  entry?: string[];
};

export const errorIdentifiersSchema: Schema<ErrorIdentifiers> = s.object<ErrorIdentifiers>({
  entry: s.optional(s.array(s.string())),
});
