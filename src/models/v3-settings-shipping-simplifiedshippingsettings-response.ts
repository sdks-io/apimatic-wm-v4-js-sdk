import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  simplifiedShippingSettings12Schema,
  type SimplifiedShippingSettings12,
} from "./simplified-shipping-settings12.js";

export type V3SettingsShippingSimplifiedshippingsettingsResponse = {
  /**
   * Simplified Shipping Settings. <br><b style='color:green;'>Market availability: US</span></b>
   */
  simplifiedShippingSettings?: SimplifiedShippingSettings12;
};

export const v3SettingsShippingSimplifiedshippingsettingsResponseSchema: Schema<V3SettingsShippingSimplifiedshippingsettingsResponse> =
  s.object<V3SettingsShippingSimplifiedshippingsettingsResponse>({
    simplifiedShippingSettings: s.optional(s.lazy(() => simplifiedShippingSettings12Schema)),
  });
