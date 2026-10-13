import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreateQueryResponse = {
  queryId: string;
};

export const createQueryResponseSchema: Schema<CreateQueryResponse> = s.object<CreateQueryResponse>({
  queryId: s.string(),
});
