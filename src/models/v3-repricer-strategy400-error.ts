import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type V3RepricerStrategy400Error = {
  status?: string;
  errorMessage?: string;
};

export const v3RepricerStrategy400ErrorSchema: Schema<V3RepricerStrategy400Error> =
  s.object<V3RepricerStrategy400Error>({
    status: s.optional(s.string()),
    errorMessage: s.optional(s.string()),
  });
