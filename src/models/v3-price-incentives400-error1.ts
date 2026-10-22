import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type V3PriceIncentives400Error1 = {
  status?: string;
  errorMessage?: string;
};

export const v3PriceIncentives400Error1Schema: Schema<V3PriceIncentives400Error1> =
  s.object<V3PriceIncentives400Error1>({
    status: s.optional(s.string()),
    errorMessage: s.optional(s.string()),
  });
