import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error7Schema, type Error7 } from "./error7.js";

export type ErrorResponseError3 = {
  error: Error7;
};

export const errorResponseError3Schema: Schema<ErrorResponseError3> = s.object<ErrorResponseError3>({
  error: error7Schema,
});
