import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error2Schema, type Error2 } from "./error2.js";

export type ErrorResponse1 = {
  errors?: Error2[];
};

export const errorResponse1Schema: Schema<ErrorResponse1> = s.object<ErrorResponse1>({
  errors: s.optional(s.array(s.lazy(() => error2Schema))),
});
