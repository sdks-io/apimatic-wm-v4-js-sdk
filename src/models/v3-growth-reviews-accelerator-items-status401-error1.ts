import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error11Schema, type Error11 } from "./error11.js";

export type V3GrowthReviewsAcceleratorItemsStatus401Error1 = {
  error?: Error11[];
};

export const v3GrowthReviewsAcceleratorItemsStatus401Error1Schema: Schema<V3GrowthReviewsAcceleratorItemsStatus401Error1> =
  s.object<V3GrowthReviewsAcceleratorItemsStatus401Error1>({
    error: s.optional(s.array(s.lazy(() => error11Schema))),
  });
