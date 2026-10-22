import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountConfigs7Schema, type AccountConfigs7 } from "./account-configs7.js";

/** Simplified Shipping Settings. <br><b style='color:green;'>Market availability: US</span></b> */
export type SimplifiedShippingSettings8 = {
  /**
   * Account configuration to be set for a seller, comprising of Carrier configurations and Region
   * configurations. <br><b style='color:green;'>Market availability: US</span></b>
   */
  accountConfigs?: AccountConfigs7;
};

export const simplifiedShippingSettings8Schema: Schema<SimplifiedShippingSettings8> =
  s.object<SimplifiedShippingSettings8>({
    accountConfigs: s.optional(s.lazy(() => accountConfigs7Schema)),
  });
