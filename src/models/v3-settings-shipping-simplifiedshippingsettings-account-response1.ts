import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  simplifiedShippingSettings11Schema,
  type SimplifiedShippingSettings11,
} from "./simplified-shipping-settings11.js";

export type V3SettingsShippingSimplifiedshippingsettingsAccountResponse1 = {
  /**
   * Simplified Shipping Settings. <br><b style='color:green;'>Market availability: US</span></b>
   */
  simplifiedShippingSettings?: SimplifiedShippingSettings11;
};

export const v3SettingsShippingSimplifiedshippingsettingsAccountResponse1Schema: Schema<V3SettingsShippingSimplifiedshippingsettingsAccountResponse1> =
  s.object<V3SettingsShippingSimplifiedshippingsettingsAccountResponse1>({
    simplifiedShippingSettings: s.optional(s.lazy(() => simplifiedShippingSettings11Schema)),
  });
