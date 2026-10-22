import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error7Schema, type Error7 } from "./error7.js";

export type ErrorResponse3 = {
  error: Error7;
};

export const errorResponse3Schema: Schema<ErrorResponse3> = s.object<ErrorResponse3>({
  error: error7Schema,
});
