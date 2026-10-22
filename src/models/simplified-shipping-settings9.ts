import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountConfigs8Schema, type AccountConfigs8 } from "./account-configs8.js";

/** Simplified Shipping Settings. <br><b style='color:green;'>Market availability: US</span></b> */
export type SimplifiedShippingSettings9 = {
  /**
   * Account configuration to be set for a seller, comprising of Carrier configurations and Region
   * configurations. <br><b style='color:green;'>Market availability: US</span></b>
   */
  accountConfigs?: AccountConfigs8;
};

export const simplifiedShippingSettings9Schema: Schema<SimplifiedShippingSettings9> =
  s.object<SimplifiedShippingSettings9>({
    accountConfigs: s.optional(s.lazy(() => accountConfigs8Schema)),
  });
