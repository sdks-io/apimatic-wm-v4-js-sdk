import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { commonAddressSchema, type CommonAddress } from "./common-address.js";

/** Specifies the 'ship from' address for the shipment. */
export type CommonShipmentSource = {
  /** Specific details to identify a place. */
  address?: CommonAddress;
  /** The type of source for this shipment. Possible values: `SELLER_FACILITY`. */
  sourceType: string;
};

export const commonShipmentSourceSchema: Schema<CommonShipmentSource> = s.object<CommonShipmentSource>({
  address: s.optional(s.lazy(() => commonAddressSchema)),
  sourceType: s.string(),
});
