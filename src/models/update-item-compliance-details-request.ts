import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { commonTaxDetailsSchema, type CommonTaxDetails } from "./common-tax-details.js";

/** The `updateItemComplianceDetails` request. */
export type UpdateItemComplianceDetailsRequest = {
  /** The merchant SKU, a merchant-supplied identifier for a specific SKU. */
  msku: string;
  /** Information used to determine the tax compliance. */
  taxDetails: CommonTaxDetails;
};

export const updateItemComplianceDetailsRequestSchema: Schema<UpdateItemComplianceDetailsRequest> =
  s.object<UpdateItemComplianceDetailsRequest>({
    msku: s.string(),
    taxDetails: commonTaxDetailsSchema,
  });
