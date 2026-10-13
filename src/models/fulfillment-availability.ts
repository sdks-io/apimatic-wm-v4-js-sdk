import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fulfillmentChannelCodeSchema, type FulfillmentChannelCode } from "./fulfillment-channel-code.js";

export type FulfillmentAvailability = {
  fulfillmentChannelCode?: FulfillmentChannelCode;
  quantity?: number;
  /** ISO 8601 duration (e.g. PT2D for 2-day lead time) */
  leadTimeToDeploy?: string;
};

export const fulfillmentAvailabilitySchema: Schema<FulfillmentAvailability> =
  s.object<FulfillmentAvailability>({
    fulfillmentChannelCode: s.optional(s.lazy(() => fulfillmentChannelCodeSchema)),
    quantity: s.optional(s.int()),
    leadTimeToDeploy: s.optional(s.string()),
  });
