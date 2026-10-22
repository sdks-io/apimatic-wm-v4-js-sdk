import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { feed5Schema, type Feed5 } from "./feed5.js";

/** Specifies the feed status results. */
export type Results4 = {
  /** Specifies the feed status results. */
  feed?: Feed5[];
};

export const results4Schema: Schema<Results4> = s.object<Results4>({
  feed: s.optional(s.array(s.lazy(() => feed5Schema))),
});
