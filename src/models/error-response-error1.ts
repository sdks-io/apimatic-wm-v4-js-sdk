import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error2Schema, type Error2 } from "./error2.js";

export type ErrorResponseError1 = {
  errors?: Error2[];
};

export const errorResponseError1Schema: Schema<ErrorResponseError1> = s.object<ErrorResponseError1>({
  errors: s.optional(s.array(s.lazy(() => error2Schema))),
});
