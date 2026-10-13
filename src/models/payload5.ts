import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cancellationStatusSchema, type CancellationStatus } from "./cancellation-status.js";

export type Payload5 = {
  /** Whether the cancellation was accepted by the carrier. */
  cancelled?: boolean;
  cancellationStatus?: CancellationStatus;
  message?: string;
};

export const payload5Schema: Schema<Payload5> = s.object<Payload5>({
  cancelled: s.optional(s.boolean()),
  cancellationStatus: s.optional(s.lazy(() => cancellationStatusSchema)),
  message: s.optional(s.string()),
});
