import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** carriers */
export type Carrier1 = {
  /**
   * The carrier ID. A unique identifier for the carrier.
   *
   * <b style="color: green;">Market availability: Global</b>
   */
  carrierId?: string;
  /**
   * The carrier's short name.
   *
   * <b style="color: green;">Market availability: Global</b>
   */
  shortName?: string;
  /**
   * The carrier's name.
   *
   * <b style="color: green;">Market availability: Global</b>
   */
  carrierName?: string;
};

export const carrier1Schema: Schema<Carrier1> = s.object<Carrier1>({
  carrierId: s.optional(s.string()),
  shortName: s.optional(s.string()),
  carrierName: s.optional(s.string()),
});
