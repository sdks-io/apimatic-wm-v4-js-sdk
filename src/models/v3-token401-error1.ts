import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type V3Token401Error1 = {
  /** @default "invalid_client" */
  error?: string;
  /** @default "Bad client credentials" */
  errorDescription?: string;
};

export const v3Token401Error1Schema: Schema<V3Token401Error1> = s.object<V3Token401Error1>({
  error: s.defaulted(s.string(), "invalid_client"),
  errorDescription: s.defaulted(s.string(), "Bad client credentials"),
  _keysMap: {
    errorDescription: "error_description",
  },
});
