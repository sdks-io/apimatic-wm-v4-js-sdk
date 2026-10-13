import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CancelQueryResponse = {
  queryId?: string;
};

export const cancelQueryResponseSchema: Schema<CancelQueryResponse> = s.object<CancelQueryResponse>({
  queryId: s.optional(s.string()),
});
