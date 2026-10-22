import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error7Schema, type Error7 } from "./error7.js";

export type ErrorResponses = {
  error: Error7;
};

export const errorResponsesSchema: Schema<ErrorResponses> = s.object<ErrorResponses>({
  error: error7Schema,
});
