import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data7Schema, type Data7 } from "./data7.js";

export type V3ShippingLabelsPurchaseOrdersResponse = {
  /** List of label details generated for the specified purchase order ID. */
  data?: Data7[];
};

export const v3ShippingLabelsPurchaseOrdersResponseSchema: Schema<V3ShippingLabelsPurchaseOrdersResponse> =
  s.object<V3ShippingLabelsPurchaseOrdersResponse>({
    data: s.optional(s.array(s.lazy(() => data7Schema))),
  });
