import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type V3FeedsFeedTypeProgramActionsRequestTypeWalmartPlusSff400Error = {
  /** Contains a list of high-level errors encountered during the operation. */
  errors?: Record<string, unknown>[];
};

export const v3FeedsFeedTypeProgramActionsRequestTypeWalmartPlusSff400ErrorSchema: Schema<V3FeedsFeedTypeProgramActionsRequestTypeWalmartPlusSff400Error> =
  s.object<V3FeedsFeedTypeProgramActionsRequestTypeWalmartPlusSff400Error>({
    errors: s.optional(s.array(s.record(s.string(), s.unknown()))),
  });
