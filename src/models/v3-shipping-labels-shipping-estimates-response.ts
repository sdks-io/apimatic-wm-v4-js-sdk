import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data6Schema, type Data6 } from "./data6.js";

export type V3ShippingLabelsShippingEstimatesResponse = {
  /** Response payload containing the list of shipping cost estimates for available services. */
  data?: Data6;
};

export const v3ShippingLabelsShippingEstimatesResponseSchema: Schema<V3ShippingLabelsShippingEstimatesResponse> =
  s.object<V3ShippingLabelsShippingEstimatesResponse>({
    data: s.optional(s.lazy(() => data6Schema)),
  });
