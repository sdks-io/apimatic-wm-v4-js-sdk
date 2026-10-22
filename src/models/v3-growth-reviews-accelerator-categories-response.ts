import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error12Schema, type Error12 } from "./error12.js";
import { payload51Schema, type Payload51 } from "./payload51.js";

export type V3GrowthReviewsAcceleratorCategoriesResponse = {
  /** Response payload. */
  payload?: Payload51;
  /** Status code for the request.<br><b style='color:green;'>Market availability: US only</b> */
  statusCode?: number;
  errors?: Error12[];
};

export const v3GrowthReviewsAcceleratorCategoriesResponseSchema: Schema<V3GrowthReviewsAcceleratorCategoriesResponse> =
  s.object<V3GrowthReviewsAcceleratorCategoriesResponse>({
    payload: s.optional(s.lazy(() => payload51Schema)),
    statusCode: s.optional(s.int()),
    errors: s.optional(s.array(s.lazy(() => error12Schema))),
  });
