import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  simplifiedShippingSettings8Schema,
  type SimplifiedShippingSettings8,
} from "./simplified-shipping-settings8.js";

export type V3SettingsShippingSimplifiedshippingsettingsAccountRequest = {
  /**
   * Simplified Shipping Settings. <br><b style='color:green;'>Market availability: US</span></b>
   */
  simplifiedShippingSettings?: SimplifiedShippingSettings8;
};

export const v3SettingsShippingSimplifiedshippingsettingsAccountRequestSchema: Schema<V3SettingsShippingSimplifiedshippingsettingsAccountRequest> =
  s.object<V3SettingsShippingSimplifiedshippingsettingsAccountRequest>({
    simplifiedShippingSettings: s.optional(s.lazy(() => simplifiedShippingSettings8Schema)),
  });
