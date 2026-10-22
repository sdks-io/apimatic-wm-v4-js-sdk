import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type V3FeedsFeedTypeProgramActionsRequestTypeWalmartPlusSff400Error1 = {
  /** Contains a list of high-level errors encountered during the operation. */
  errors?: Record<string, unknown>[];
};

export const v3FeedsFeedTypeProgramActionsRequestTypeWalmartPlusSff400Error1Schema: Schema<V3FeedsFeedTypeProgramActionsRequestTypeWalmartPlusSff400Error1> =
  s.object<V3FeedsFeedTypeProgramActionsRequestTypeWalmartPlusSff400Error1>({
    errors: s.optional(s.array(s.record(s.string(), s.unknown()))),
  });
