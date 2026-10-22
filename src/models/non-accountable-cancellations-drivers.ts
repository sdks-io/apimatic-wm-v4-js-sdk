import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Non Accountable drivers, which impacting the cancellations rate */
export type NonAccountableCancellationsDrivers = {
  /** Rate of orders cancelled due customer request */
  customerReqRate?: number;
  /** Rate of orders cancelled due customer fraud */
  customerFraudRate?: number;
  /** Rate of orders cancelled due to miscellaneous reasons */
  miscellaneousRate?: number;
};

export const nonAccountableCancellationsDriversSchema: Schema<NonAccountableCancellationsDrivers> =
  s.object<NonAccountableCancellationsDrivers>({
    customerReqRate: s.optional(s.float64()),
    customerFraudRate: s.optional(s.float64()),
    miscellaneousRate: s.optional(s.float64()),
  });
