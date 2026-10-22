import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** From address - Seller's fulfilment center address. */
export type ShipmentLocation = {
  postalCode: string;
  countryCode: string;
  /** addressLines */
  addressLines: string[];
  /** city */
  city: string;
  /** state */
  state: string;
};

export const shipmentLocationSchema: Schema<ShipmentLocation> = s.object<ShipmentLocation>({
  postalCode: s.string(),
  countryCode: s.string(),
  addressLines: s.array(s.string()),
  city: s.string(),
  state: s.string(),
});
