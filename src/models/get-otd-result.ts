import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { getOtdResultPayloadSchema, type GetOtdResultPayload } from "./get-otd-result-payload.js";

export type GetOtdResult = {
  payload?: GetOtdResultPayload;
  status?: string;
};

export const getOtdResultSchema: Schema<GetOtdResult> = s.object<GetOtdResult>({
  payload: s.optional(s.lazy(() => getOtdResultPayloadSchema)),
  status: s.optional(s.string()),
});
