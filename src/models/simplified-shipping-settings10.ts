import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountConfigs9Schema, type AccountConfigs9 } from "./account-configs9.js";

/** Simplified Shipping Settings. <br><b style='color:green;'>Market availability: US</span></b> */
export type SimplifiedShippingSettings10 = {
  /**
   * Account configuration to be set for a seller, comprising of Carrier configurations and Region
   * configurations. <br><b style='color:green;'>Market availability: US</span></b>
   */
  accountConfigs?: AccountConfigs9;
};

export const simplifiedShippingSettings10Schema: Schema<SimplifiedShippingSettings10> =
  s.object<SimplifiedShippingSettings10>({
    accountConfigs: s.optional(s.lazy(() => accountConfigs9Schema)),
  });
