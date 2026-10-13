import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorListSchema, type ErrorList } from "./error-list.js";

export type CancelFulfillmentOrderResponse = {
  errors?: ErrorList;
};

export const cancelFulfillmentOrderResponseSchema: Schema<CancelFulfillmentOrderResponse> =
  s.object<CancelFulfillmentOrderResponse>({
    errors: s.optional(s.lazy(() => errorListSchema)),
  });
