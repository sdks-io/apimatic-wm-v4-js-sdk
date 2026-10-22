import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NotFoundResponseError = {
  timestamp?: Date;
  status?: number;
  error?: string;
  path?: string;
};

export const notFoundResponseErrorSchema: Schema<NotFoundResponseError> = s.object<NotFoundResponseError>({
  timestamp: s.optional(s.dateTime()),
  status: s.optional(s.int()),
  error: s.optional(s.string()),
  path: s.optional(s.string()),
});
