import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Non Accountable drivers, which impacting the valid tracking rate */
export type NonAccountableVtrDrivers = {
  /** Rate of orders impacted due to miscellaneous reasons */
  miscellaneousRate?: number;
};

export const nonAccountableVtrDriversSchema: Schema<NonAccountableVtrDrivers> =
  s.object<NonAccountableVtrDrivers>({
    miscellaneousRate: s.optional(s.float64()),
  });
