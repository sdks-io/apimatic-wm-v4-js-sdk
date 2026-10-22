import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Individual drivers of on time shipment rate */
export type OtsInfractionDrivers = {
  /** Marked as shipped later rate */
  markedAsShippedLateRate?: number;
  /** Late handover to carrier rate */
  lateHandoverToCarrierRate?: number;
};

export const otsInfractionDriversSchema: Schema<OtsInfractionDrivers> = s.object<OtsInfractionDrivers>({
  markedAsShippedLateRate: s.optional(s.float64()),
  lateHandoverToCarrierRate: s.optional(s.float64()),
});
