import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type2Schema, type Type2 } from "./type2.js";

export type IngestionError = {
  /** Indicates the error type. */
  type: Type2;
  /** Specifies the error code. */
  code: string;
  /** Error description */
  description?: string;
};

export const ingestionErrorSchema: Schema<IngestionError> = s.object<IngestionError>({
  type: type2Schema,
  code: s.string(),
  description: s.optional(s.string()),
});
