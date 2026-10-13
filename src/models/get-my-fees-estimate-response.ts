import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorListSchema, type ErrorList } from "./error-list.js";
import {
  getMyFeesEstimateResultSchema,
  type GetMyFeesEstimateResult,
} from "./get-my-fees-estimate-result.js";

/** Response for single-item fee estimate endpoints. Mirrors SP-API GetMyFeesEstimateResponse. */
export type GetMyFeesEstimateResponse = {
  /** Wraps the fee estimate result for a single-item endpoint. */
  payload?: GetMyFeesEstimateResult;
  errors?: ErrorList;
};

export const getMyFeesEstimateResponseSchema: Schema<GetMyFeesEstimateResponse> =
  s.object<GetMyFeesEstimateResponse>({
    payload: s.optional(s.lazy(() => getMyFeesEstimateResultSchema)),
    errors: s.optional(s.lazy(() => errorListSchema)),
  });
