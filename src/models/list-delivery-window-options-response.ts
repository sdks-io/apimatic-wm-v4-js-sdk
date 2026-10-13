import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  commonDeliveryWindowOptionSchema,
  type CommonDeliveryWindowOption,
} from "./common-delivery-window-option.js";
import { commonPaginationSchema, type CommonPagination } from "./common-pagination.js";

/** The `listDeliveryWindowOptions` response. */
export type ListDeliveryWindowOptionsResponse = {
  /** Delivery window options generated for the shipment. */
  deliveryWindowOptions: CommonDeliveryWindowOption[];
  /** Contains tokens to fetch from a certain page. */
  pagination?: CommonPagination;
};

export const listDeliveryWindowOptionsResponseSchema: Schema<ListDeliveryWindowOptionsResponse> =
  s.object<ListDeliveryWindowOptionsResponse>({
    deliveryWindowOptions: s.array(s.lazy(() => commonDeliveryWindowOptionSchema)),
    pagination: s.optional(s.lazy(() => commonPaginationSchema)),
  });
