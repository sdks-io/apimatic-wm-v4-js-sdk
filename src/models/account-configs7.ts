import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { carrierConfig18Schema, type CarrierConfig18 } from "./carrier-config18.js";

/**
 * Account configuration to be set for a seller, comprising of Carrier configurations and Region
 * configurations. <br><b style='color:green;'>Market availability: US</span></b>
 */
export type AccountConfigs7 = {
  /**
   * Flag used to migrate/not migrate all the eligible offers for a seller. <br><b
   * style='color:green;'>Market availability: US</span></b>
   */
  migrateEligibleOffers?: boolean;
  /**
   * Defines the carrier configurations used for shipping, like carrier details and their
   * corresponding region coverage.. <br><b style='color:green;'>Market availability: US</span></b>
   */
  carrierConfigs?: CarrierConfig18[];
};

export const accountConfigs7Schema: Schema<AccountConfigs7> = s.object<AccountConfigs7>({
  migrateEligibleOffers: s.optional(s.boolean()),
  carrierConfigs: s.optional(s.array(s.lazy(() => carrierConfig18Schema))),
});
