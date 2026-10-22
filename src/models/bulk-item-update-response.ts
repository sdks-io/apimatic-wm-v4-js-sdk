import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  bulkItemStatusUpdateResponsePayloadSchema,
  type BulkItemStatusUpdateResponsePayload,
} from "./bulk-item-status-update-response-payload.js";
import { error8Schema, type Error8 } from "./error8.js";

export type BulkItemUpdateResponse = {
  /** Response payload. */
  payload?: BulkItemStatusUpdateResponsePayload;
  /** Status code for the request. */
  statusCode?: number;
  errors?: Error8[];
};

export const bulkItemUpdateResponseSchema: Schema<BulkItemUpdateResponse> = s.object<BulkItemUpdateResponse>({
  payload: s.optional(s.lazy(() => bulkItemStatusUpdateResponsePayloadSchema)),
  statusCode: s.optional(s.int()),
  errors: s.optional(s.array(s.lazy(() => error8Schema))),
});
