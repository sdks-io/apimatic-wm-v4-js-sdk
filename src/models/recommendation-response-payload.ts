import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaDataResponseSchema, type MetaDataResponse } from "./meta-data-response.js";
import { record1Schema, type Record1 } from "./record1.js";

/** Payload in the response having the details about the item recommendations. */
export type RecommendationResponsePayload = {
  /**
   * | Attribute | Description | Data Type |
   * | --- | ----------- | ------- |
   * | ITEM | To get list of recommended items | string |
   *
   * @default "ITEM"
   */
  recommendationType?: "ITEM";
  /** Meta information for the response. */
  meta?: MetaDataResponse;
  /** Information related to the item recommendations. */
  records?: Record1[];
};

export const recommendationResponsePayloadSchema: Schema<RecommendationResponsePayload> =
  s.object<RecommendationResponsePayload>({
    recommendationType: s.defaulted(s.literal("ITEM"), "ITEM"),
    meta: s.optional(s.lazy(() => metaDataResponseSchema)),
    records: s.optional(s.array(s.lazy(() => record1Schema))),
  });
