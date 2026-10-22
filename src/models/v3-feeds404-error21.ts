import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error3Schema, type Error3 } from "./error3.js";
import { results4Schema, type Results4 } from "./results4.js";

export type V3Feeds404Error21 = {
  errors?: Error3[];
  /** Total number of feeds returned. */
  totalResults?: number;
  /** The object response to the starting number, where 0 is the first available. */
  offset?: number;
  /** The number of items to be returned. */
  limit?: number;
  /** Specifies the feed status results. */
  results?: Results4;
};

export const v3Feeds404Error21Schema: Schema<V3Feeds404Error21> = s.object<V3Feeds404Error21>({
  errors: s.optional(s.array(s.lazy(() => error3Schema))),
  totalResults: s.optional(s.int()),
  offset: s.optional(s.int()),
  limit: s.optional(s.int()),
  results: s.optional(s.lazy(() => results4Schema)),
});
