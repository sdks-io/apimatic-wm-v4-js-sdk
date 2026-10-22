import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { carrier1Schema, type Carrier1 } from "./carrier1.js";

export type V3ShippingLabelsCarriersResponse = {
  /**
   * carriers
   *
   * <b style="color: green;">Market availability: Global</b>
   */
  carriers?: Carrier1[];
};

export const v3ShippingLabelsCarriersResponseSchema: Schema<V3ShippingLabelsCarriersResponse> =
  s.object<V3ShippingLabelsCarriersResponse>({
    carriers: s.optional(s.array(s.lazy(() => carrier1Schema))),
  });
