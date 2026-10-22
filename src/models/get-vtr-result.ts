import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { getVtrResultPayloadSchema, type GetVtrResultPayload } from "./get-vtr-result-payload.js";

export type GetVtrResult = {
  payload?: GetVtrResultPayload;
  status?: string;
};

export const getVtrResultSchema: Schema<GetVtrResult> = s.object<GetVtrResult>({
  payload: s.optional(s.lazy(() => getVtrResultPayloadSchema)),
  status: s.optional(s.string()),
});
