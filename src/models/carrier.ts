import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** carriers */
export type Carrier = {
  /** The carrier ID. A unique identifier for the carrier. */
  carrierId?: string;
  /** The carrier short name. */
  shortName?: string;
  /** The carrier name. */
  carrierName?: string;
};

export const carrierSchema: Schema<Carrier> = s.object<Carrier>({
  carrierId: s.optional(s.string()),
  shortName: s.optional(s.string()),
  carrierName: s.optional(s.string()),
});
