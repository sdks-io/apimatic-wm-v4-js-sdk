import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error8Schema, type Error8 } from "./error8.js";
import {
  getIrpItemsResponsePayloadSchema,
  type GetIrpItemsResponsePayload,
} from "./get-irp-items-response-payload.js";

export type GetIrpItemsResponse = {
  /** Response payload. */
  payload?: GetIrpItemsResponsePayload;
  /** Status code for the request. */
  statusCode?: number;
  errors?: Error8[];
};

export const getIrpItemsResponseSchema: Schema<GetIrpItemsResponse> = s.object<GetIrpItemsResponse>({
  payload: s.optional(s.lazy(() => getIrpItemsResponsePayloadSchema)),
  statusCode: s.optional(s.int()),
  errors: s.optional(s.array(s.lazy(() => error8Schema))),
});
