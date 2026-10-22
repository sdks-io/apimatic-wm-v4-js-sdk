import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data4Schema, type Data4 } from "./data4.js";

export type V3ShippingLabelsResponse = {
  /**
   * Response payload containing the generated label tracking details and, when requested, the label
   * file.
   */
  data?: Data4;
};

export const v3ShippingLabelsResponseSchema: Schema<V3ShippingLabelsResponse> =
  s.object<V3ShippingLabelsResponse>({
    data: s.optional(s.lazy(() => data4Schema)),
  });
