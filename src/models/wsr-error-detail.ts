import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Individual error detail */
export type WsrErrorDetail = {
  /**
   * Error code of the response.
   *
   * **Common Codes**:
   * - `SA_4000`: Bad request / validation error
   * - `SA_4001`: Unauthorized
   * - `SA_4003`: Forbidden
   * - `SA_5000`: Internal server error
   */
  code?: string;
  /** Human-readable description of the error */
  description?: string;
};

export const wsrErrorDetailSchema: Schema<WsrErrorDetail> = s.object<WsrErrorDetail>({
  code: s.optional(s.string()),
  description: s.optional(s.string()),
});
