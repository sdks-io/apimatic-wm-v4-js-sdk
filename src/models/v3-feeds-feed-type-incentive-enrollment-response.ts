import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type V3FeedsFeedTypeIncentiveEnrollmentResponse = {
  /** <br><b style='color:green;'>Market availability: US only</b> */
  feedId?: string;
  /** <br><b style='color:green;'>Market availability: US only</b> */
  message?: string;
  /** <br><b style='color:green;'>Market availability: US only</b> */
  additionalAttributes?: Record<string, unknown> | null;
  /** <br><b style='color:green;'>Market availability: US only</b> */
  errors?: Record<string, unknown> | null;
};

export const v3FeedsFeedTypeIncentiveEnrollmentResponseSchema: Schema<V3FeedsFeedTypeIncentiveEnrollmentResponse> =
  s.object<V3FeedsFeedTypeIncentiveEnrollmentResponse>({
    feedId: s.optional(s.string()),
    message: s.optional(s.string()),
    additionalAttributes: s.optionalNullable(s.record(s.string(), s.unknown())),
    errors: s.optionalNullable(s.record(s.string(), s.unknown())),
  });
