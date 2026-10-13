import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { commonTaxDetailsSchema, type CommonTaxDetails } from "./common-tax-details.js";

/** Contains item identifiers and related tax information. */
export type CommonComplianceDetail = {
  /** The merchant SKU, a merchant-supplied identifier for a specific SKU. */
  msku?: string;
  /** Information used to determine the tax compliance. */
  taxDetails?: CommonTaxDetails;
};

export const commonComplianceDetailSchema: Schema<CommonComplianceDetail> = s.object<CommonComplianceDetail>({
  msku: s.optional(s.string()),
  taxDetails: s.optional(s.lazy(() => commonTaxDetailsSchema)),
});
