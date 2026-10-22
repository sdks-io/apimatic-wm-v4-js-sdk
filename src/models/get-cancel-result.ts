import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { getCancelResultPayloadSchema, type GetCancelResultPayload } from "./get-cancel-result-payload.js";

export type GetCancelResult = {
  payload?: GetCancelResultPayload;
  status?: string;
};

export const getCancelResultSchema: Schema<GetCancelResult> = s.object<GetCancelResult>({
  payload: s.optional(s.lazy(() => getCancelResultPayloadSchema)),
  status: s.optional(s.string()),
});
