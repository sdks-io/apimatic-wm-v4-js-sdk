import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** From address - Seller's fulfillment center address. */
export type FromAddress4 = {
  /** ZIP or postal code of the seller's fulfillment center. */
  postalCode: string;
  /** Country code of the seller's fulfillment center (example, US, CN, IN). */
  countryCode: string;
  /**
   * Street address lines for the seller's fulfillment center. Provide up to two lines. Provide up
   * to two lines.
   */
  addressLines: string[];
  /** City of the seller's fulfillment center. */
  city: string;
  /**
   * State or province of the seller's fulfillment center. Use the standard two-letter code where
   * applicable.
   */
  state: string;
};

export const fromAddress4Schema: Schema<FromAddress4> = s.object<FromAddress4>({
  postalCode: s.string(),
  countryCode: s.string(),
  addressLines: s.array(s.string()),
  city: s.string(),
  state: s.string(),
});
