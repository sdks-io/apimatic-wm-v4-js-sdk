import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Representation of a location used within the inbounding experience. */
export type CommonRegion = {
  /** ISO 3166 standard alpha-2 country code. */
  countryCode?: string;
  /** State. */
  state?: string;
  /** An identifier for a Ship Node. */
  warehouseId?: string;
};

export const commonRegionSchema: Schema<CommonRegion> = s.object<CommonRegion>({
  countryCode: s.optional(s.string()),
  state: s.optional(s.string()),
  warehouseId: s.optional(s.string()),
});
