import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error51Schema, type Error51 } from "./error51.js";

export type V3GrowthReviewsAcceleratorItemsStatus400Error1 = {
  statusCode?: number;
  errors?: Error51[];
};

export const v3GrowthReviewsAcceleratorItemsStatus400Error1Schema: Schema<V3GrowthReviewsAcceleratorItemsStatus400Error1> =
  s.object<V3GrowthReviewsAcceleratorItemsStatus400Error1>({
    statusCode: s.optional(s.int()),
    errors: s.optional(s.array(s.lazy(() => error51Schema))),
  });
