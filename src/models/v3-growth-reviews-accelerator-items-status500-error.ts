import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error11Schema, type Error11 } from "./error11.js";

export type V3GrowthReviewsAcceleratorItemsStatus500Error = {
  statusCode?: number;
  errors?: Error11[];
};

export const v3GrowthReviewsAcceleratorItemsStatus500ErrorSchema: Schema<V3GrowthReviewsAcceleratorItemsStatus500Error> =
  s.object<V3GrowthReviewsAcceleratorItemsStatus500Error>({
    statusCode: s.optional(s.int()),
    errors: s.optional(s.array(s.lazy(() => error11Schema))),
  });
