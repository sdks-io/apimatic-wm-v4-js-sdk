import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorListSchema, type ErrorList } from "./error-list.js";

export type CreateFulfillmentOrderResponse = {
  errors?: ErrorList;
};

export const createFulfillmentOrderResponseSchema: Schema<CreateFulfillmentOrderResponse> =
  s.object<CreateFulfillmentOrderResponse>({
    errors: s.optional(s.lazy(() => errorListSchema)),
  });
