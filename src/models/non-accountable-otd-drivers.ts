import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Non Accountable drivers, which impacting the on time delivery rate */
export type NonAccountableOtdDrivers = {
  /** Rate of orders impacted due to carrier delays */
  carrierDelaysRate?: number;
  /** Rate of orders impacted due to carrier exceptions */
  carrierExceptionRate?: number;
  /** Rate of orders impacted due to miscellaneous reasons */
  miscellaneousRate?: number;
};

export const nonAccountableOtdDriversSchema: Schema<NonAccountableOtdDrivers> =
  s.object<NonAccountableOtdDrivers>({
    carrierDelaysRate: s.optional(s.float64()),
    carrierExceptionRate: s.optional(s.float64()),
    miscellaneousRate: s.optional(s.float64()),
  });
