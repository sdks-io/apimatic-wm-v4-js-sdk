import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error51Schema, type Error51 } from "./error51.js";

export type V3GrowthReviewsAcceleratorCategories400Error = {
  statusCode?: number;
  error?: Error51[];
};

export const v3GrowthReviewsAcceleratorCategories400ErrorSchema: Schema<V3GrowthReviewsAcceleratorCategories400Error> =
  s.object<V3GrowthReviewsAcceleratorCategories400Error>({
    statusCode: s.optional(s.int()),
    error: s.optional(s.array(s.lazy(() => error51Schema))),
  });
