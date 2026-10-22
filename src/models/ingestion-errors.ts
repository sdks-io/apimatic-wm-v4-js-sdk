import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { ingestionErrorSchema, type IngestionError } from "./ingestion-error.js";

/** List of errors for an item. */
export type IngestionErrors = {
  ingestionError?: IngestionError[];
};

export const ingestionErrorsSchema: Schema<IngestionErrors> = s.object<IngestionErrors>({
  ingestionError: s.optional(s.array(s.lazy(() => ingestionErrorSchema))),
});
