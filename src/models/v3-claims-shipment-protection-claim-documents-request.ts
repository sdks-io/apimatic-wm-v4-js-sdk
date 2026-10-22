import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type V3ClaimsShipmentProtectionClaimDocumentsRequest = {
  /** Array of document IDs to download */
  documentIds: string[];
};

export const v3ClaimsShipmentProtectionClaimDocumentsRequestSchema: Schema<V3ClaimsShipmentProtectionClaimDocumentsRequest> =
  s.object<V3ClaimsShipmentProtectionClaimDocumentsRequest>({
    documentIds: s.array(s.string()),
  });
