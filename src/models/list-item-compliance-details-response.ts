import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { commonComplianceDetailSchema, type CommonComplianceDetail } from "./common-compliance-detail.js";

/** The `listItemComplianceDetails` response. */
export type ListItemComplianceDetailsResponse = {
  /** List of compliance details. */
  complianceDetails?: CommonComplianceDetail[];
};

export const listItemComplianceDetailsResponseSchema: Schema<ListItemComplianceDetailsResponse> =
  s.object<ListItemComplianceDetailsResponse>({
    complianceDetails: s.optional(s.array(s.lazy(() => commonComplianceDetailSchema))),
  });
