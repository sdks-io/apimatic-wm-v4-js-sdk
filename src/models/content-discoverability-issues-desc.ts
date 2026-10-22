import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ContentDiscoverabilityIssuesDesc = {
  title?: string;
  value?: string;
};

export const contentDiscoverabilityIssuesDescSchema: Schema<ContentDiscoverabilityIssuesDesc> =
  s.object<ContentDiscoverabilityIssuesDesc>({
    title: s.optional(s.string()),
    value: s.optional(s.string()),
  });
