import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data8Schema, type Data8 } from "./data8.js";

export type V3ShippingLabelsCarriersPackageTypesResponse = {
  /**
   * data
   *
   * <b style="color: green;">Market availability: Global</b>
   */
  data?: Data8[];
};

export const v3ShippingLabelsCarriersPackageTypesResponseSchema: Schema<V3ShippingLabelsCarriersPackageTypesResponse> =
  s.object<V3ShippingLabelsCarriersPackageTypesResponse>({
    data: s.optional(s.array(s.lazy(() => data8Schema))),
  });
