import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data9Schema, type Data9 } from "./data9.js";

export type V3ShippingScanFormResponse = {
  /** Response payload for the operation. */
  data?: Data9;
};

export const v3ShippingScanFormResponseSchema: Schema<V3ShippingScanFormResponse> =
  s.object<V3ShippingScanFormResponse>({
    data: s.optional(s.lazy(() => data9Schema)),
  });
