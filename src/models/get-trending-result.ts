import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  getTrendingResultPayloadSchema,
  type GetTrendingResultPayload,
} from "./get-trending-result-payload.js";

export type GetTrendingResult = {
  payload?: GetTrendingResultPayload;
  status?: string;
};

export const getTrendingResultSchema: Schema<GetTrendingResult> = s.object<GetTrendingResult>({
  payload: s.optional(s.lazy(() => getTrendingResultPayloadSchema)),
  status: s.optional(s.string()),
});
