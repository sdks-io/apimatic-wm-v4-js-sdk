import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { semFilterSchema, type SemFilter } from "./sem-filter.js";

export type SemItemEligibilityRequest = {
  /** List of filters to apply when checking eligibility. */
  filters: SemFilter[];
};

export const semItemEligibilityRequestSchema: Schema<SemItemEligibilityRequest> =
  s.object<SemItemEligibilityRequest>({
    filters: s.array(s.lazy(() => semFilterSchema)),
  });
