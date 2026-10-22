import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  itemDetailsForListingQualityPayloadSchema,
  type ItemDetailsForListingQualityPayload,
} from "./item-details-for-listing-quality-payload.js";

export type ItemDetailsLqResponsePayload = {
  nextCursor?: string;
  totalItems?: string;
  payload?: ItemDetailsForListingQualityPayload[];
  status?: string;
};

export const itemDetailsLqResponsePayloadSchema: Schema<ItemDetailsLqResponsePayload> =
  s.object<ItemDetailsLqResponsePayload>({
    nextCursor: s.optional(s.string()),
    totalItems: s.optional(s.string()),
    payload: s.optional(s.array(s.lazy(() => itemDetailsForListingQualityPayloadSchema))),
    status: s.optional(s.string()),
  });
