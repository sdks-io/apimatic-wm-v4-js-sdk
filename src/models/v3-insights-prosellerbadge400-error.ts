import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type V3InsightsProsellerbadge400Error = {
  errorCode?: string;
  errorDescription?: string;
};

export const v3InsightsProsellerbadge400ErrorSchema: Schema<V3InsightsProsellerbadge400Error> =
  s.object<V3InsightsProsellerbadge400Error>({
    errorCode: s.optional(s.string()),
    errorDescription: s.optional(s.string()),
  });
