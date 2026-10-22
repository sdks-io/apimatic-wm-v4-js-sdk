import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error12Schema, type Error12 } from "./error12.js";
import { payload32Schema, type Payload32 } from "./payload32.js";

export type V3GrowthReviewsAcceleratorItemsStatusResponse = {
  /** Response payload. */
  payload?: Payload32;
  /** Status code for the request. */
  statusCode?: number;
  errors?: Error12[];
};

export const v3GrowthReviewsAcceleratorItemsStatusResponseSchema: Schema<V3GrowthReviewsAcceleratorItemsStatusResponse> =
  s.object<V3GrowthReviewsAcceleratorItemsStatusResponse>({
    payload: s.optional(s.lazy(() => payload32Schema)),
    statusCode: s.optional(s.int()),
    errors: s.optional(s.array(s.lazy(() => error12Schema))),
  });
