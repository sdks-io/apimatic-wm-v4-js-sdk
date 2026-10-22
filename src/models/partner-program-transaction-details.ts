import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { adjustmentAggregateSchema, type AdjustmentAggregate } from "./adjustment-aggregate.js";
import { partnerTxnsSchema, type PartnerTxns } from "./partner-txns.js";
import { saleRefundAggrSchema, type SaleRefundAggr } from "./sale-refund-aggr.js";
import { wfsAggrSchema, type WfsAggr } from "./wfs-aggr.js";

export type PartnerProgramTransactionDetails = {
  saleAggregate?: SaleRefundAggr;
  refundDetails?: SaleRefundAggr;
  adjustmentAggregate?: AdjustmentAggregate;
  wfs?: WfsAggr;
  partnerTxns?: PartnerTxns;
};

export const partnerProgramTransactionDetailsSchema: Schema<PartnerProgramTransactionDetails> =
  s.object<PartnerProgramTransactionDetails>({
    saleAggregate: s.optional(s.lazy(() => saleRefundAggrSchema)),
    refundDetails: s.optional(s.lazy(() => saleRefundAggrSchema)),
    adjustmentAggregate: s.optional(s.lazy(() => adjustmentAggregateSchema)),
    wfs: s.optional(s.lazy(() => wfsAggrSchema)),
    partnerTxns: s.optional(s.lazy(() => partnerTxnsSchema)),
  });
