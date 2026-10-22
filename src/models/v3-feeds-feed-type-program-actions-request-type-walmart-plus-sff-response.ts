import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { headerSchema, type Header } from "./header.js";
import { payload20Schema, type Payload20 } from "./payload20.js";

export type V3FeedsFeedTypeProgramActionsRequestTypeWalmartPlusSffResponse = {
  /** Overall status of the request. */
  status?: string;
  /** Response header information. */
  header?: Header;
  /** Contains a list of high-level errors encountered during the operation. */
  errors?: Record<string, unknown>[];
  /** Response payload containing operation results. */
  payload?: Payload20;
};

export const v3FeedsFeedTypeProgramActionsRequestTypeWalmartPlusSffResponseSchema: Schema<V3FeedsFeedTypeProgramActionsRequestTypeWalmartPlusSffResponse> =
  s.object<V3FeedsFeedTypeProgramActionsRequestTypeWalmartPlusSffResponse>({
    status: s.optional(s.string()),
    header: s.optional(s.lazy(() => headerSchema)),
    errors: s.optional(s.array(s.record(s.string(), s.unknown()))),
    payload: s.optional(s.lazy(() => payload20Schema)),
  });
