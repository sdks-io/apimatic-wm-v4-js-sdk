import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  createSubscriptionRequestRecordSchema,
  type CreateSubscriptionRequestRecord,
} from "./create-subscription-request-record.js";

export type CreateSubscriptionRequest = {
  events?: CreateSubscriptionRequestRecord[];
};

export const createSubscriptionRequestSchema: Schema<CreateSubscriptionRequest> =
  s.object<CreateSubscriptionRequest>({
    events: s.optional(s.array(s.lazy(() => createSubscriptionRequestRecordSchema))),
  });
