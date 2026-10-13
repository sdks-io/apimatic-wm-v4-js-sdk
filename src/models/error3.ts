import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Error response returned when the request is unsuccessful. */
export type Error3 = {
  code: string;
  message: string;
  details?: string;
};

export const error3Schema: Schema<Error3> = s.object<Error3>({
  code: s.string(),
  message: s.string(),
  details: s.optional(s.string()),
});
