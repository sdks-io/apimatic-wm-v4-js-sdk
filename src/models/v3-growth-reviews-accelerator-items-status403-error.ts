import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error11Schema, type Error11 } from "./error11.js";

export type V3GrowthReviewsAcceleratorItemsStatus403Error = {
  error?: Error11[];
};

export const v3GrowthReviewsAcceleratorItemsStatus403ErrorSchema: Schema<V3GrowthReviewsAcceleratorItemsStatus403Error> =
  s.object<V3GrowthReviewsAcceleratorItemsStatus403Error>({
    error: s.optional(s.array(s.lazy(() => error11Schema))),
  });
