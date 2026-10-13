import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { commonAddressInputSchema, type CommonAddressInput } from "./common-address-input.js";

/** The `updateShipmentSourceAddress` request. */
export type UpdateShipmentSourceAddressRequest = {
  /** Specific details to identify a place (input variant — phone required). */
  address: CommonAddressInput;
};

export const updateShipmentSourceAddressRequestSchema: Schema<UpdateShipmentSourceAddressRequest> =
  s.object<UpdateShipmentSourceAddressRequest>({
    address: commonAddressInputSchema,
  });
