import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { getCategoriesPayloadSchema, type GetCategoriesPayload } from "./get-categories-payload.js";

export type GetCategoriesResponse = {
  payload?: GetCategoriesPayload[];
};

export const getCategoriesResponseSchema: Schema<GetCategoriesResponse> = s.object<GetCategoriesResponse>({
  payload: s.optional(s.array(s.lazy(() => getCategoriesPayloadSchema))),
});
