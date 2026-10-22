import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { getSrrResultPayloadSchema, type GetSrrResultPayload } from "./get-srr-result-payload.js";

export type GetSrrResult = {
  payload?: GetSrrResultPayload;
  status?: string;
};

export const getSrrResultSchema: Schema<GetSrrResult> = s.object<GetSrrResult>({
  payload: s.optional(s.lazy(() => getSrrResultPayloadSchema)),
  status: s.optional(s.string()),
});
