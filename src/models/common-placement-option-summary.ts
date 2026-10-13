import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Summary information about a placement option. */
export type CommonPlacementOptionSummary = {
  /** The identifier of a placement option. */
  placementOptionId: string;
  /** The status of a placement option. Possible values: `OFFERED`, `ACCEPTED`. */
  status: string;
};

export const commonPlacementOptionSummarySchema: Schema<CommonPlacementOptionSummary> =
  s.object<CommonPlacementOptionSummary>({
    placementOptionId: s.string(),
    status: s.string(),
  });
