import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { getSflaResultPayloadSchema, type GetSflaResultPayload } from "./get-sfla-result-payload.js";

export type GetSflaResult = {
  payload?: GetSflaResultPayload;
  status?: string;
};

export const getSflaResultSchema: Schema<GetSflaResult> = s.object<GetSflaResult>({
  payload: s.optional(s.lazy(() => getSflaResultPayloadSchema)),
  status: s.optional(s.string()),
});
