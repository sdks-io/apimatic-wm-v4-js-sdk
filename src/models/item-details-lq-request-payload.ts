import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { filterSchema, type Filter } from "./filter.js";
import { querySchema, type Query } from "./query.js";

export type ItemDetailsLqRequestPayload = {
  query?: Query;
  filters?: Filter[];
};

export const itemDetailsLqRequestPayloadSchema: Schema<ItemDetailsLqRequestPayload> =
  s.object<ItemDetailsLqRequestPayload>({
    query: s.optional(s.lazy(() => querySchema)),
    filters: s.optional(s.array(s.lazy(() => filterSchema))),
  });
