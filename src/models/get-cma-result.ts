import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { getCmaResultPayloadSchema, type GetCmaResultPayload } from "./get-cma-result-payload.js";

export type GetCmaResult = {
  payload?: GetCmaResultPayload;
  status?: string;
};

export const getCmaResultSchema: Schema<GetCmaResult> = s.object<GetCmaResult>({
  payload: s.optional(s.lazy(() => getCmaResultPayloadSchema)),
  status: s.optional(s.string()),
});
