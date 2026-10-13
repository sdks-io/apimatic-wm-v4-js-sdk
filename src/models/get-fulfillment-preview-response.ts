import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  getFulfillmentPreviewResultSchema,
  type GetFulfillmentPreviewResult,
} from "./get-fulfillment-preview-result.js";

export type GetFulfillmentPreviewResponse = {
  payload?: GetFulfillmentPreviewResult;
};

export const getFulfillmentPreviewResponseSchema: Schema<GetFulfillmentPreviewResponse> =
  s.object<GetFulfillmentPreviewResponse>({
    payload: s.optional(s.lazy(() => getFulfillmentPreviewResultSchema)),
  });
