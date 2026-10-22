import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  subscriptionResponseDtoRecordSchema,
  type SubscriptionResponseDtoRecord,
} from "./subscription-response-dto-record.js";

/** List of event-specific subscription arrays. */
export type Events1 = {
  event?: SubscriptionResponseDtoRecord[];
};

export const events1Schema: Schema<Events1> = s.object<Events1>({
  event: s.optional(s.array(s.lazy(() => subscriptionResponseDtoRecordSchema))),
});
