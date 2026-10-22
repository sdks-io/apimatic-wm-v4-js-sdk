import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type V3ShippingLabelsCarriersTrackingsResponse = {
  /**
   * Returns `true` if the label was successfully discarded.
   *
   * <b style="color: green;">Market availability: US | CA | MX</b>
   */
  data?: boolean;
};

export const v3ShippingLabelsCarriersTrackingsResponseSchema: Schema<V3ShippingLabelsCarriersTrackingsResponse> =
  s.object<V3ShippingLabelsCarriersTrackingsResponse>({
    data: s.optional(s.boolean()),
  });
