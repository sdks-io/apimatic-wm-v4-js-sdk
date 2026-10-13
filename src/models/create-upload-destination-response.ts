import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreateUploadDestinationResponse = {
  /** The upload destination ID to pass when creating a feed or report */
  uploadDestinationId?: string;
  /** Pre-signed URL for a PUT upload (valid 15 minutes) — do not log */
  url?: string;
  /** HTTP headers to include with the upload PUT request */
  headers?: Record<string, string>;
};

export const createUploadDestinationResponseSchema: Schema<CreateUploadDestinationResponse> =
  s.object<CreateUploadDestinationResponse>({
    uploadDestinationId: s.optional(s.string()),
    url: s.optional(s.string()),
    headers: s.optional(s.record(s.string(), s.string())),
  });
