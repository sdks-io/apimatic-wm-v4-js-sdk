import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error12Schema, type Error12 } from "./error12.js";
import { payload41Schema, type Payload41 } from "./payload41.js";

export type V3GrowthReviewsAcceleratorItemsResponse = {
  /** Response payload. */
  payload?: Payload41;
  /** Status code for the request.<br><b style='color:green;'>Market availability: US only</b> */
  statusCode?: number;
  errors?: Error12[];
};

export const v3GrowthReviewsAcceleratorItemsResponseSchema: Schema<V3GrowthReviewsAcceleratorItemsResponse> =
  s.object<V3GrowthReviewsAcceleratorItemsResponse>({
    payload: s.optional(s.lazy(() => payload41Schema)),
    statusCode: s.optional(s.int()),
    errors: s.optional(s.array(s.lazy(() => error12Schema))),
  });
