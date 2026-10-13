import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fulfillmentPreviewSchema, type FulfillmentPreview } from "./fulfillment-preview.js";

export type GetFulfillmentPreviewResult = {
  fulfillmentPreviews?: FulfillmentPreview[];
};

export const getFulfillmentPreviewResultSchema: Schema<GetFulfillmentPreviewResult> =
  s.object<GetFulfillmentPreviewResult>({
    fulfillmentPreviews: s.optional(s.array(s.lazy(() => fulfillmentPreviewSchema))),
  });
