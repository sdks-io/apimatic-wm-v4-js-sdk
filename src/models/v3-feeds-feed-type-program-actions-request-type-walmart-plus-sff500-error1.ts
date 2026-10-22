import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { header1Schema, type Header1 } from "./header1.js";

export type V3FeedsFeedTypeProgramActionsRequestTypeWalmartPlusSff500Error1 = {
  /** Overall status of the request. */
  status?: string;
  /** Response header information. */
  header?: Header1;
  /** Contains a list of high-level errors encountered during the operation. */
  errors?: Record<string, unknown>[];
};

export const v3FeedsFeedTypeProgramActionsRequestTypeWalmartPlusSff500Error1Schema: Schema<V3FeedsFeedTypeProgramActionsRequestTypeWalmartPlusSff500Error1> =
  s.object<V3FeedsFeedTypeProgramActionsRequestTypeWalmartPlusSff500Error1>({
    status: s.optional(s.string()),
    header: s.optional(s.lazy(() => header1Schema)),
    errors: s.optional(s.array(s.record(s.string(), s.unknown()))),
  });
