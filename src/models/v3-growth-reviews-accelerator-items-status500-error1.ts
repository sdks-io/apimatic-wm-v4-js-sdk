import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error11Schema, type Error11 } from "./error11.js";

export type V3GrowthReviewsAcceleratorItemsStatus500Error1 = {
  statusCode?: number;
  errors?: Error11[];
};

export const v3GrowthReviewsAcceleratorItemsStatus500Error1Schema: Schema<V3GrowthReviewsAcceleratorItemsStatus500Error1> =
  s.object<V3GrowthReviewsAcceleratorItemsStatus500Error1>({
    statusCode: s.optional(s.int()),
    errors: s.optional(s.array(s.lazy(() => error11Schema))),
  });
