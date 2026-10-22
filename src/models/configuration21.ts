import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressTypeSchema, type AddressType } from "./address-type.js";
import { region22Schema, type Region22 } from "./region22.js";

/**
 * Defines the carrier configurations used for shipping, like carrier details and their
 * corresponding region coverage..
 */
export type Configuration21 = {
  /**
   * Region configurations to which shipping has to be covered with added carriers. <br><b
   * style='color:green;'>Market availability: US</span></b>
   */
  regions?: Region22[];
  /**
   * Type of address to which shipping has to be covered as part of mentioned region, sub region and
   * states. <br><b style='color:green;'>Market availability: US</span></b>
   */
  addressTypes?: AddressType[];
};

export const configuration21Schema: Schema<Configuration21> = s.object<Configuration21>({
  regions: s.optional(s.array(s.lazy(() => region22Schema))),
  addressTypes: s.optional(s.array(s.lazy(() => addressTypeSchema))),
});
