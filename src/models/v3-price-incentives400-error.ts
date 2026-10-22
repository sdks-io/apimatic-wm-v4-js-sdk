import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type V3PriceIncentives400Error = {
  status?: string;
  errorMessage?: string;
};

export const v3PriceIncentives400ErrorSchema: Schema<V3PriceIncentives400Error> =
  s.object<V3PriceIncentives400Error>({
    status: s.optional(s.string()),
    errorMessage: s.optional(s.string()),
  });
