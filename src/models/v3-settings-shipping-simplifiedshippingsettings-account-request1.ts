import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  simplifiedShippingSettings10Schema,
  type SimplifiedShippingSettings10,
} from "./simplified-shipping-settings10.js";

export type V3SettingsShippingSimplifiedshippingsettingsAccountRequest1 = {
  /**
   * Simplified Shipping Settings. <br><b style='color:green;'>Market availability: US</span></b>
   */
  simplifiedShippingSettings?: SimplifiedShippingSettings10;
};

export const v3SettingsShippingSimplifiedshippingsettingsAccountRequest1Schema: Schema<V3SettingsShippingSimplifiedshippingsettingsAccountRequest1> =
  s.object<V3SettingsShippingSimplifiedshippingsettingsAccountRequest1>({
    simplifiedShippingSettings: s.optional(s.lazy(() => simplifiedShippingSettings10Schema)),
  });
