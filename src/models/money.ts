import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { currency17Schema, type Currency17 } from "./currency17.js";

/** Estimated Rate */
export type Money = {
  /** Monetary amount expressed as a decimal number. */
  amount?: number;
  /** Three-letter currency code (example, USD, MXN, CAD). */
  currency?: Currency17;
};

export const moneySchema: Schema<Money> = s.object<Money>({
  amount: s.optional(s.float64()),
  currency: s.optional(s.lazy(() => currency17Schema)),
});
