import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data5Schema, type Data5 } from "./data5.js";

export type V3ShippingMultiPackageLabelsResponse = {
  /** data */
  data?: Data5;
};

export const v3ShippingMultiPackageLabelsResponseSchema: Schema<V3ShippingMultiPackageLabelsResponse> =
  s.object<V3ShippingMultiPackageLabelsResponse>({
    data: s.optional(s.lazy(() => data5Schema)),
  });
