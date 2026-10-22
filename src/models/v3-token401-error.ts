import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type V3Token401Error = {
  /** @default "invalid_client" */
  error?: string;
  /** @default "Bad client credentials" */
  errorDescription?: string;
};

export const v3Token401ErrorSchema: Schema<V3Token401Error> = s.object<V3Token401Error>({
  error: s.defaulted(s.string(), "invalid_client"),
  errorDescription: s.defaulted(s.string(), "Bad client credentials"),
  _keysMap: {
    errorDescription: "error_description",
  },
});
