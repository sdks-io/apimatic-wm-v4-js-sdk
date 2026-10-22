import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error11Schema, type Error11 } from "./error11.js";

export type V3GrowthReviewsAcceleratorCategories403Error = {
  error?: Error11[];
};

export const v3GrowthReviewsAcceleratorCategories403ErrorSchema: Schema<V3GrowthReviewsAcceleratorCategories403Error> =
  s.object<V3GrowthReviewsAcceleratorCategories403Error>({
    error: s.optional(s.array(s.lazy(() => error11Schema))),
  });
