import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dataSchema, type Data } from "./data.js";

export type V3ClaimsShipmentProtectionClaimHistoryResponse = {
  data?: Data;
};

export const v3ClaimsShipmentProtectionClaimHistoryResponseSchema: Schema<V3ClaimsShipmentProtectionClaimHistoryResponse> =
  s.object<V3ClaimsShipmentProtectionClaimHistoryResponse>({
    data: s.optional(s.lazy(() => dataSchema)),
  });
