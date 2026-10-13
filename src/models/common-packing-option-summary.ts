import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Summary information about a packing option. */
export type CommonPackingOptionSummary = {
  /** Identifier of a packing option. */
  packingOptionId: string;
  /** The status of a packing option. Possible values: `OFFERED`, `ACCEPTED`, `EXPIRED`. */
  status: string;
};

export const commonPackingOptionSummarySchema: Schema<CommonPackingOptionSummary> =
  s.object<CommonPackingOptionSummary>({
    packingOptionId: s.string(),
    status: s.string(),
  });
