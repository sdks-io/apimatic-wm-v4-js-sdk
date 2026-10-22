import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Payload2 = {
  /** total count for unpublished Item */
  unpublishedCount?: string;
  /** total value for unpublished Item */
  unpublishedValue?: string;
  /** the reason why item is unpublished */
  unpublishedReasonCode?: string;
};

export const payload2Schema: Schema<Payload2> = s.object<Payload2>({
  unpublishedCount: s.optional(s.string()),
  unpublishedValue: s.optional(s.string()),
  unpublishedReasonCode: s.optional(s.string()),
});
