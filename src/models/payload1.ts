import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaDataResponseSchema, type MetaDataResponse } from "./meta-data-response.js";
import { recordModelSchema, type RecordModel } from "./record-model.js";

/** Payload in the response having the details about the item recommendations. */
export type Payload1 = {
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
  records?: RecordModel[];
};

export const payload1Schema: Schema<Payload1> = s.object<Payload1>({
  recommendationType: s.defaulted(s.literal("ITEM"), "ITEM"),
  meta: s.optional(s.lazy(() => metaDataResponseSchema)),
  records: s.optional(s.array(s.lazy(() => recordModelSchema))),
});
