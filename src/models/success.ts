import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { itemsSuccessResponseSchema, type ItemsSuccessResponse } from "./items-success-response.js";

/** Items succeeded. */
export type Success = {
  /** Items. */
  items?: ItemsSuccessResponse[];
};

export const successSchema: Schema<Success> = s.object<Success>({
  items: s.optional(s.array(s.lazy(() => itemsSuccessResponseSchema))),
});
