import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error8Schema, type Error8 } from "./error8.js";
import {
  getCategoriesResponsePayloadSchema,
  type GetCategoriesResponsePayload,
} from "./get-categories-response-payload.js";

export type GetCategoriesResponse1 = {
  /** Response payload. */
  payload?: GetCategoriesResponsePayload;
  /** Status code for the request. */
  statusCode?: number;
  errors?: Error8[];
};

export const getCategoriesResponse1Schema: Schema<GetCategoriesResponse1> = s.object<GetCategoriesResponse1>({
  payload: s.optional(s.lazy(() => getCategoriesResponsePayloadSchema)),
  statusCode: s.optional(s.int()),
  errors: s.optional(s.array(s.lazy(() => error8Schema))),
});
