import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { payloadSchema, type Payload } from "./payload.js";

export type GetFulfillmentOrderResponse = {
  payload?: Payload;
};

export const getFulfillmentOrderResponseSchema: Schema<GetFulfillmentOrderResponse> =
  s.object<GetFulfillmentOrderResponse>({
    payload: s.optional(s.lazy(() => payloadSchema)),
  });
