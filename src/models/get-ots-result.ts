import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { getOtsResultPayloadSchema, type GetOtsResultPayload } from "./get-ots-result-payload.js";

export type GetOtsResult = {
  payload?: GetOtsResultPayload;
  status?: string;
};

export const getOtsResultSchema: Schema<GetOtsResult> = s.object<GetOtsResult>({
  payload: s.optional(s.lazy(() => getOtsResultPayloadSchema)),
  status: s.optional(s.string()),
});
