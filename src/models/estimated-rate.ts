import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { currency8Schema, type Currency8 } from "./currency8.js";

/** Estimated Rate */
export type EstimatedRate = {
  amount?: number;
  currency?: Currency8;
};

export const estimatedRateSchema: Schema<EstimatedRate> = s.object<EstimatedRate>({
  amount: s.optional(s.float64()),
  currency: s.optional(s.lazy(() => currency8Schema)),
});
