import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { getRefundResultPayloadSchema, type GetRefundResultPayload } from "./get-refund-result-payload.js";

export type GetRefundResult = {
  payload?: GetRefundResultPayload;
  status?: string;
};

export const getRefundResultSchema: Schema<GetRefundResult> = s.object<GetRefundResult>({
  payload: s.optional(s.lazy(() => getRefundResultPayloadSchema)),
  status: s.optional(s.string()),
});
