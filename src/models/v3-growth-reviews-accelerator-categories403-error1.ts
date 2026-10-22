import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error11Schema, type Error11 } from "./error11.js";

export type V3GrowthReviewsAcceleratorCategories403Error1 = {
  error?: Error11[];
};

export const v3GrowthReviewsAcceleratorCategories403Error1Schema: Schema<V3GrowthReviewsAcceleratorCategories403Error1> =
  s.object<V3GrowthReviewsAcceleratorCategories403Error1>({
    error: s.optional(s.array(s.lazy(() => error11Schema))),
  });
