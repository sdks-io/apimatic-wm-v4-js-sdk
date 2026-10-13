import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { payload1Schema, type Payload1 } from "./payload1.js";

export type GetFulfillmentOrderShipmentsResponse = {
  payload?: Payload1;
};

export const getFulfillmentOrderShipmentsResponseSchema: Schema<GetFulfillmentOrderShipmentsResponse> =
  s.object<GetFulfillmentOrderShipmentsResponse>({
    payload: s.optional(s.lazy(() => payload1Schema)),
  });
