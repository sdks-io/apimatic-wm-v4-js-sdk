import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { itemsFailureResponseSchema, type ItemsFailureResponse } from "./items-failure-response.js";

/** Items failed. */
export type Failure = {
  /** Items. */
  items?: ItemsFailureResponse[];
};

export const failureSchema: Schema<Failure> = s.object<Failure>({
  items: s.optional(s.array(s.lazy(() => itemsFailureResponseSchema))),
});
