import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error51Schema, type Error51 } from "./error51.js";

export type V3GrowthReviewsAcceleratorItems400Error = {
  statusCode?: number;
  errors?: Error51[];
};

export const v3GrowthReviewsAcceleratorItems400ErrorSchema: Schema<V3GrowthReviewsAcceleratorItems400Error> =
  s.object<V3GrowthReviewsAcceleratorItems400Error>({
    statusCode: s.optional(s.int()),
    errors: s.optional(s.array(s.lazy(() => error51Schema))),
  });
