import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { commonAddressSchema, type CommonAddress } from "./common-address.js";
import {
  commonPackingOptionSummarySchema,
  type CommonPackingOptionSummary,
} from "./common-packing-option-summary.js";
import {
  commonPlacementOptionSummarySchema,
  type CommonPlacementOptionSummary,
} from "./common-placement-option-summary.js";
import { commonShipmentSummarySchema, type CommonShipmentSummary } from "./common-shipment-summary.js";

/** Inbound plan containing details of the WFS inbound workflow. */
export type CommonInboundPlan = {
  /**
   * The time at which the inbound plan was created. In ISO 8601 datetime format with pattern
   * `yyyy-MM-ddTHH:mm:ssZ`.
   */
  createdAt: Date;
  /** Identifier of an inbound plan. */
  inboundPlanId: string;
  /**
   * The time at which the inbound plan was last updated. In ISO 8601 datetime format with pattern
   * `yyyy-MM-ddTHH:mm:ssZ`.
   */
  lastUpdatedAt: Date;
  /** A list of Walmart marketplace IDs. */
  marketplaceIds: string[];
  /** Human-readable name of the inbound plan. */
  name: string;
  /**
   * Packing options for the inbound plan. Populated after generation via the corresponding
   * operation.
   */
  packingOptions?: CommonPackingOptionSummary[];
  /**
   * Placement options for the inbound plan. Populated after generation via the corresponding
   * operation.
   */
  placementOptions?: CommonPlacementOptionSummary[];
  /** A list of shipment IDs for the inbound plan. Populated after `confirmPlacementOptions`. */
  shipments?: CommonShipmentSummary[];
  /** Specific details to identify a place. */
  sourceAddress: CommonAddress;
  /**
   * Current status of the inbound plan. Possible values: `ACTIVE`, `VOIDED`, `SHIPPED`, `ERRORED`.
   */
  status: string;
};

export const commonInboundPlanSchema: Schema<CommonInboundPlan> = s.object<CommonInboundPlan>({
  createdAt: s.dateTime(),
  inboundPlanId: s.string(),
  lastUpdatedAt: s.dateTime(),
  marketplaceIds: s.array(s.string()),
  name: s.string(),
  packingOptions: s.optional(s.array(s.lazy(() => commonPackingOptionSummarySchema))),
  placementOptions: s.optional(s.array(s.lazy(() => commonPlacementOptionSummarySchema))),
  shipments: s.optional(s.array(s.lazy(() => commonShipmentSummarySchema))),
  sourceAddress: commonAddressSchema,
  status: s.string(),
});
