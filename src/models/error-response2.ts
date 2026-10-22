import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error6Schema, type Error6 } from "./error6.js";

export type ErrorResponse2 = {
  status?: string;
  errors?: Error6[];
};

export const errorResponse2Schema: Schema<ErrorResponse2> = s.object<ErrorResponse2>({
  status: s.optional(s.string()),
  errors: s.optional(s.array(s.lazy(() => error6Schema))),
});
