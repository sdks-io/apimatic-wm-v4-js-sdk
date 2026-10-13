import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { feedSchema, type Feed } from "./feed.js";

export type GetFeedsResponse = {
  /** List of feeds matching the request filters */
  feeds?: Feed[];
  /** Token to retrieve the next page of results; absent when no more pages exist */
  nextToken?: string;
};

export const getFeedsResponseSchema: Schema<GetFeedsResponse> = s.object<GetFeedsResponse>({
  feeds: s.optional(s.array(s.lazy(() => feedSchema))),
  nextToken: s.optional(s.string()),
});
