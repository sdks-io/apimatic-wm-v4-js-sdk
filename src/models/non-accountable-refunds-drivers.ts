import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Non Accountable drivers, which impacting the refunds rate */
export type NonAccountableRefundsDrivers = {
  /** Refund rate of returns due to customer changed mind */
  customerChangedMindRate?: number;
  /** Refund rate of returns due to miscellaneous reasons */
  miscellaneousRate?: number;
  /** Refund rate of undelivered orders */
  undeliveredRate?: number;
};

export const nonAccountableRefundsDriversSchema: Schema<NonAccountableRefundsDrivers> =
  s.object<NonAccountableRefundsDrivers>({
    customerChangedMindRate: s.optional(s.float64()),
    miscellaneousRate: s.optional(s.float64()),
    undeliveredRate: s.optional(s.float64()),
  });
