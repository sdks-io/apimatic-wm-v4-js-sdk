import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** To Address - Customer's Delivery Address */
export type ToShipmentLocation = {
  postalCode: string;
  countryCode: string;
  /** addressLines */
  addressLines: string[];
  /** city */
  city: string;
  /** state */
  state: string;
};

export const toShipmentLocationSchema: Schema<ToShipmentLocation> = s.object<ToShipmentLocation>({
  postalCode: s.string(),
  countryCode: s.string(),
  addressLines: s.array(s.string()),
  city: s.string(),
  state: s.string(),
});
