import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Units grouped by storage duration. Used for long-term storage fee assessment. 7 buckets:
 * days365Plus, days365To450, and days450Plus reflect the upstream split-aged-buckets feature —
 * days365Plus is the pre-split total.
 */
export type WfsInventoryAge = {
  days0To90?: number;
  days91To180?: number;
  days181To270?: number;
  days271To365?: number;
  days365Plus?: number;
  days365To450?: number;
  days450Plus?: number;
};

export const wfsInventoryAgeSchema: Schema<WfsInventoryAge> = s.object<WfsInventoryAge>({
  days0To90: s.optional(s.int()),
  days91To180: s.optional(s.int()),
  days181To270: s.optional(s.int()),
  days271To365: s.optional(s.int()),
  days365Plus: s.optional(s.int()),
  days365To450: s.optional(s.int()),
  days450Plus: s.optional(s.int()),
});
