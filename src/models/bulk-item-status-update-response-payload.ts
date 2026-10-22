import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { failureSchema, type Failure } from "./failure.js";
import { successSchema, type Success } from "./success.js";

/** Response payload. */
export type BulkItemStatusUpdateResponsePayload = {
  /** Items succeeded. */
  success?: Success;
  /** Items failed. */
  failure?: Failure;
};

export const bulkItemStatusUpdateResponsePayloadSchema: Schema<BulkItemStatusUpdateResponsePayload> =
  s.object<BulkItemStatusUpdateResponsePayload>({
    success: s.optional(s.lazy(() => successSchema)),
    failure: s.optional(s.lazy(() => failureSchema)),
  });
