import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status206ItemResponseSchema, type Status206ItemResponse } from "./status206-item-response.js";

export type Status206Response = {
  /** list of ItemResponses */
  itemResponse?: Status206ItemResponse[];
};

export const status206ResponseSchema: Schema<Status206Response> = s.object<Status206Response>({
  itemResponse: s.optional(s.array(s.lazy(() => status206ItemResponseSchema))),
});
