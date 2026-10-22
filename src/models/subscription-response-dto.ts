import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  subscriptionResponseDtoRecordSchema,
  type SubscriptionResponseDtoRecord,
} from "./subscription-response-dto-record.js";

/** List of subscription records. */
export type SubscriptionResponseDto = {
  event?: SubscriptionResponseDtoRecord[];
};

export const subscriptionResponseDtoSchema: Schema<SubscriptionResponseDto> =
  s.object<SubscriptionResponseDto>({
    event: s.optional(s.array(s.lazy(() => subscriptionResponseDtoRecordSchema))),
  });
