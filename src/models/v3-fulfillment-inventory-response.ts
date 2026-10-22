import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { headersSchema, type Headers } from "./headers.js";
import { payload21Schema, type Payload21 } from "./payload21.js";

export type V3FulfillmentInventoryResponse = {
  headers?: Headers;
  payload?: Payload21;
};

export const v3FulfillmentInventoryResponseSchema: Schema<V3FulfillmentInventoryResponse> =
  s.object<V3FulfillmentInventoryResponse>({
    headers: s.optional(s.lazy(() => headersSchema)),
    payload: s.optional(s.lazy(() => payload21Schema)),
  });
