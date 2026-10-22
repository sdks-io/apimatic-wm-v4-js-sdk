import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type V3FulfillmentInventory403Error1 = {
  code?: string;
  field?: string;
  description?: string;
  info?: string;
  severity?: string;
  category?: string;
  /** Causes of the error. */
  causes?: string[];
  /** Error Identifiers of the error. */
  errorIdentifiers?: Record<string, unknown>;
};

export const v3FulfillmentInventory403Error1Schema: Schema<V3FulfillmentInventory403Error1> =
  s.object<V3FulfillmentInventory403Error1>({
    code: s.optional(s.string()),
    field: s.optional(s.string()),
    description: s.optional(s.string()),
    info: s.optional(s.string()),
    severity: s.optional(s.string()),
    category: s.optional(s.string()),
    causes: s.optional(s.array(s.string())),
    errorIdentifiers: s.optional(s.record(s.string(), s.unknown())),
  });
