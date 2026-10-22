import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Origin (ship-from) address used for the scan form.
 *
 * <b style="color: green;">Market availability: US only</b>
 */
export type FromAddress5 = {
  /**
   * Contact name for the origin address.
   *
   * <b style="color: green;">Market availability: US only</b>
   */
  contactName: string;
  /**
   * Company name for the origin address.
   *
   * <b style="color: green;">Market availability: US only</b>
   */
  companyName?: string;
  /**
   * First line of the origin street address.
   *
   * <b style="color: green;">Market availability: US only</b>
   */
  addressLine1: string;
  /**
   * Second line of the origin street address, such as suite or unit.
   *
   * <b style="color: green;">Market availability: US only</b>
   */
  addressLine2?: string;
  /**
   * Origin city name.
   *
   * <b style="color: green;">Market availability: US only</b>
   */
  city: string;
  /**
   * Origin state or province. Use the region code when available. For example, CA, AK.
   *
   * <b style="color: green;">Market availability: US only</b>
   */
  state: string;
  /**
   * Origin postal or ZIP code.
   *
   * <b style="color: green;">Market availability: US only</b>
   */
  postalCode: string;
  /**
   * Origin country code. Use a two-letter code. For example, US, CN, IN.
   *
   * <b style="color: green;">Market availability: US only</b>
   */
  country: string;
  /**
   * Origin contact phone number.
   *
   * <b style="color: green;">Market availability: US only</b>
   */
  phone: string;
  /**
   * Origin contact email address.
   *
   * <b style="color: green;">Market availability: US only</b>
   */
  email?: string;
};

export const fromAddress5Schema: Schema<FromAddress5> = s.object<FromAddress5>({
  contactName: s.string(),
  companyName: s.optional(s.string()),
  addressLine1: s.string(),
  addressLine2: s.optional(s.string()),
  city: s.string(),
  state: s.string(),
  postalCode: s.string(),
  country: s.string(),
  phone: s.string(),
  email: s.optional(s.string()),
});
