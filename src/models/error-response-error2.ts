import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error6Schema, type Error6 } from "./error6.js";

export type ErrorResponseError2 = {
  status?: string;
  errors?: Error6[];
};

export const errorResponseError2Schema: Schema<ErrorResponseError2> = s.object<ErrorResponseError2>({
  status: s.optional(s.string()),
  errors: s.optional(s.array(s.lazy(() => error6Schema))),
});
