import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ValueAddedService = {
  /** Short service code (e.g. ADULT_SIGNATURE). */
  code: string;
  /** Human-readable description of the service. */
  description?: string;
};

export const valueAddedServiceSchema: Schema<ValueAddedService> = s.object<ValueAddedService>({
  code: s.string(),
  description: s.optional(s.string()),
});
