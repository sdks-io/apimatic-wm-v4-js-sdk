import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** To Address - Customer's delivery address. */
export type ToAddress1 = {
  /** ZIP or postal code of the customer's delivery address. */
  postalCode: string;
  /** Country code of the customer's delivery address (example, US). */
  countryCode: string;
  /** Street address lines for the customer's delivery address. Provide up to two lines. */
  addressLines: string[];
  /** City of the customer's delivery address. */
  city: string;
  /**
   * State or province of the customer's delivery address. Use the standard two-letter code where
   * applicable.
   */
  state: string;
};

export const toAddress1Schema: Schema<ToAddress1> = s.object<ToAddress1>({
  postalCode: s.string(),
  countryCode: s.string(),
  addressLines: s.array(s.string()),
  city: s.string(),
  state: s.string(),
});
