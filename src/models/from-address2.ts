import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Defines the origin address from which the order will be shipped. This represents the seller’s
 * fulfillment center location.
 *
 * <b style="color: green;">Market availability: US | CA | MX</b>
 */
export type FromAddress2 = {
  /**
   * The name of the primary contact at the fulfillment center. This name will appear on the
   * shipping label.
   *
   * <b style="color: green;">Market availability: US | CA | MX</b>
   */
  contactName: string;
  /**
   * The name of the seller’s company or fulfillment center.
   *
   * <b style="color: green;">Market availability: US | CA | MX</b>
   */
  companyName?: string;
  /**
   * The primary street address of the fulfillment center.
   *
   * <b style="color: green;">Market availability: US | CA | MX</b>
   */
  addressLine1: string;
  /**
   * Additional address details.
   *
   * <b style="color: green;">Market availability: US | CA | MX</b>
   */
  addressLine2?: string;
  /**
   * City in which the fulfillment center is located.
   *
   * <b style="color: green;">Market availability: US | CA | MX</b>
   */
  city: string;
  /**
   * State of the fulfillment center. Use the standard two-letter code.
   *
   * <b style="color: green;">Market availability: US | CA | MX</b>
   */
  state: string;
  /**
   * ZIP or postal code of the fulfillment center’s location.
   *
   * <b style="color: green;">Market availability: US | CA | MX</b>
   */
  postalCode: string;
  /**
   * The country code of the fulfillment center location.
   *
   * <b style="color: green;">Market availability: US | CA | MX</b>
   */
  country: string;
  /**
   * A valid phone number associated with the fulfillment center.
   *
   * <b style="color: green;">Market availability: US | CA | MX</b>
   */
  phone: string;
  /**
   * The email of the seller.
   *
   * <b style="color: green;">Market availability: US | CA | MX</b>
   */
  email?: string;
};

export const fromAddress2Schema: Schema<FromAddress2> = s.object<FromAddress2>({
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
