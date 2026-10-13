import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The carrier for the inbound shipment. */
export type CommonCarrier = {
  /** The carrier code. For example, USPS or DHLEX. */
  alphaCode?: string;
  /** The name of the carrier. */
  name?: string;
};

export const commonCarrierSchema: Schema<CommonCarrier> = s.object<CommonCarrier>({
  alphaCode: s.optional(s.string()),
  name: s.optional(s.string()),
});
