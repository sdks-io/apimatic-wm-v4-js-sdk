import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { commonAddressSchema, type CommonAddress } from "./common-address.js";

/** The Walmart Ship Node address and warehouse ID. */
export type CommonShipmentDestination = {
  /** Specific details to identify a place. */
  address?: CommonAddress;
  /**
   * The type of destination for this shipment. Possible values: `WALMART_OPTIMIZED`,
   * `WALMART_SHIP_NODE`.
   */
  destinationType: string;
  /**
   * The Ship Node that the shipment should be sent to. This can be empty if the destination type is
   * `WALMART_OPTIMIZED`.
   */
  warehouseId?: string;
};

export const commonShipmentDestinationSchema: Schema<CommonShipmentDestination> =
  s.object<CommonShipmentDestination>({
    address: s.optional(s.lazy(() => commonAddressSchema)),
    destinationType: s.string(),
    warehouseId: s.optional(s.string()),
  });
