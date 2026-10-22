import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error11Schema, type Error11 } from "./error11.js";

export type V3GrowthReviewsAcceleratorItems401Error = {
  error?: Error11[];
};

export const v3GrowthReviewsAcceleratorItems401ErrorSchema: Schema<V3GrowthReviewsAcceleratorItems401Error> =
  s.object<V3GrowthReviewsAcceleratorItems401Error>({
    error: s.optional(s.array(s.lazy(() => error11Schema))),
  });
