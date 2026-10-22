import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error7Schema, type Error7 } from "./error7.js";

export type ErrorResponsesError = {
  error: Error7;
};

export const errorResponsesErrorSchema: Schema<ErrorResponsesError> = s.object<ErrorResponsesError>({
  error: error7Schema,
});
