import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { regulatedInfoSchema, type RegulatedInfo } from "./regulated-info.js";

export type GetOrderRegulatedInfoResponse = {
  /**
   * Verification requirements for an order containing regulated items. Mirrors Amazon SP-API Orders
   * v0 `RegulatedInformation` plus a `regulatedCategory` discriminator so a caller can short-
   * circuit when the order is not regulated at all.
   */
  payload?: RegulatedInfo;
};

export const getOrderRegulatedInfoResponseSchema: Schema<GetOrderRegulatedInfoResponse> =
  s.object<GetOrderRegulatedInfoResponse>({
    payload: s.optional(s.lazy(() => regulatedInfoSchema)),
  });
