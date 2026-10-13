import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Carrier = {
  id: string;
  /**
   * Carrier display name. Walmart-specific enum-widening for internally-fulfilled carriers (e.g.
   * WALMART_GROUND) is captured by leaving this as a free string rather than a closed enum.
   */
  name: string;
};

export const carrierSchema: Schema<Carrier> = s.object<Carrier>({
  id: s.string(),
  name: s.string(),
});
