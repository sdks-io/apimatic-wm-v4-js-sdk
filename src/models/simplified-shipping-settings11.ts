import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountConfigs10Schema, type AccountConfigs10 } from "./account-configs10.js";

/** Simplified Shipping Settings. <br><b style='color:green;'>Market availability: US</span></b> */
export type SimplifiedShippingSettings11 = {
  /**
   * Account configuration to be set for a seller, comprising of Carrier configurations and Region
   * configurations. <br><b style='color:green;'>Market availability: US</span></b>
   */
  accountConfigs?: AccountConfigs10;
};

export const simplifiedShippingSettings11Schema: Schema<SimplifiedShippingSettings11> =
  s.object<SimplifiedShippingSettings11>({
    accountConfigs: s.optional(s.lazy(() => accountConfigs10Schema)),
  });
