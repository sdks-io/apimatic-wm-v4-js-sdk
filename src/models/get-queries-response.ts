import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pagination1Schema, type Pagination1 } from "./pagination1.js";
import { querySchema, type Query } from "./query.js";

export type GetQueriesResponse = {
  queries?: Query[];
  pagination?: Pagination1;
};

export const getQueriesResponseSchema: Schema<GetQueriesResponse> = s.object<GetQueriesResponse>({
  queries: s.optional(s.array(s.lazy(() => querySchema))),
  pagination: s.optional(s.lazy(() => pagination1Schema)),
});
