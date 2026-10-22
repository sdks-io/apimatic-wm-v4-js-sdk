import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type V3InsightsProsellerbadge400Error1 = {
  errorCode?: string;
  errorDescription?: string;
};

export const v3InsightsProsellerbadge400Error1Schema: Schema<V3InsightsProsellerbadge400Error1> =
  s.object<V3InsightsProsellerbadge400Error1>({
    errorCode: s.optional(s.string()),
    errorDescription: s.optional(s.string()),
  });
