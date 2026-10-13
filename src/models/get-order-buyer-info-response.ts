import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { buyerInfoSchema, type BuyerInfo } from "./buyer-info.js";

export type GetOrderBuyerInfoResponse = {
  /**
   * Buyer contact projection. `buyerPhoneAnonymized` is masked to the last 4 digits (e.g.
   * `***-***-0100`); the unmasked phone number is never returned by the v4 API.
   */
  payload?: BuyerInfo;
};

export const getOrderBuyerInfoResponseSchema: Schema<GetOrderBuyerInfoResponse> =
  s.object<GetOrderBuyerInfoResponse>({
    payload: s.optional(s.lazy(() => buyerInfoSchema)),
  });
