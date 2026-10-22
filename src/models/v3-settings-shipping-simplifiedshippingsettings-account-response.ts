import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  simplifiedShippingSettings9Schema,
  type SimplifiedShippingSettings9,
} from "./simplified-shipping-settings9.js";

export type V3SettingsShippingSimplifiedshippingsettingsAccountResponse = {
  /**
   * Simplified Shipping Settings. <br><b style='color:green;'>Market availability: US</span></b>
   */
  simplifiedShippingSettings?: SimplifiedShippingSettings9;
};

export const v3SettingsShippingSimplifiedshippingsettingsAccountResponseSchema: Schema<V3SettingsShippingSimplifiedshippingsettingsAccountResponse> =
  s.object<V3SettingsShippingSimplifiedshippingsettingsAccountResponse>({
    simplifiedShippingSettings: s.optional(s.lazy(() => simplifiedShippingSettings9Schema)),
  });
