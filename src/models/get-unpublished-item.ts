import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  getUnpublishedItemsPayloadSchema,
  type GetUnpublishedItemsPayload,
} from "./get-unpublished-items-payload.js";
import { totalGmvAmountSchema, type TotalGmvAmount } from "./total-gmv-amount.js";

export type GetUnpublishedItem = {
  payload?: GetUnpublishedItemsPayload[];
  /** total number of unpublished items */
  totalCount?: number;
  /** Gross Merchandise Value of the total result set */
  totalGmvAmount?: TotalGmvAmount;
};

export const getUnpublishedItemSchema: Schema<GetUnpublishedItem> = s.object<GetUnpublishedItem>({
  payload: s.optional(s.array(s.lazy(() => getUnpublishedItemsPayloadSchema))),
  totalCount: s.optional(s.int()),
  totalGmvAmount: s.optional(s.lazy(() => totalGmvAmountSchema)),
});
