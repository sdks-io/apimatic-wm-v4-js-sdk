import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Optional seller-supplied filter to restrict the rate quote to a specific carrier(s) and/or
 * service(s).
 */
export type ServiceSelection = {
  serviceIds?: string[];
  carrierIds?: string[];
};

export const serviceSelectionSchema: Schema<ServiceSelection> = s.object<ServiceSelection>({
  serviceIds: s.optional(s.array(s.string())),
  carrierIds: s.optional(s.array(s.string())),
});
