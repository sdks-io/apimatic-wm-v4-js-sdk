import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { commonPaginationSchema, type CommonPagination } from "./common-pagination.js";
import { commonPalletSchema, type CommonPallet } from "./common-pallet.js";

/** The `listInboundPlanPallets` response., The `listShipmentPallets` response. */
export type ListInboundPlanPalletsResponse = {
  /** The pallets in an inbound plan. */
  pallets: CommonPallet[];
  /** Contains tokens to fetch from a certain page. */
  pagination?: CommonPagination;
};

export const listInboundPlanPalletsResponseSchema: Schema<ListInboundPlanPalletsResponse> =
  s.object<ListInboundPlanPalletsResponse>({
    pallets: s.array(s.lazy(() => commonPalletSchema)),
    pagination: s.optional(s.lazy(() => commonPaginationSchema)),
  });
