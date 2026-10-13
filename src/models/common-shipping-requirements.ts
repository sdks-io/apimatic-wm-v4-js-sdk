import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The possible shipping modes for the packing option for a given shipping solution. */
export type CommonShippingRequirements = {
  /** Available shipment modes for this shipping program. */
  modes: string[];
  /**
   * Shipping program for the option. Can be: `WALMART_PARTNERED_CARRIER`, `USE_YOUR_OWN_CARRIER`.
   */
  solution: string;
};

export const commonShippingRequirementsSchema: Schema<CommonShippingRequirements> =
  s.object<CommonShippingRequirements>({
    modes: s.array(s.string()),
    solution: s.string(),
  });
