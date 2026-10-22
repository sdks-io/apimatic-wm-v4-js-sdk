import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type WfsAggr = {
  netPayable?: number;
  wfsFullfillmentFee?: number;
  wfsStorageFee?: number;
  wfsAdjustment?: number;
  wfsFee?: number;
  inventoryRemovalOrder?: number;
  inventoryDisposalOrder?: number;
  wfsPrepServiceFee?: number;
};

export const wfsAggrSchema: Schema<WfsAggr> = s.object<WfsAggr>({
  netPayable: s.optional(s.float64()),
  wfsFullfillmentFee: s.optional(s.float64()),
  wfsStorageFee: s.optional(s.float64()),
  wfsAdjustment: s.optional(s.float64()),
  wfsFee: s.optional(s.float64()),
  inventoryRemovalOrder: s.optional(s.float64()),
  inventoryDisposalOrder: s.optional(s.float64()),
  wfsPrepServiceFee: s.optional(s.float64()),
});
