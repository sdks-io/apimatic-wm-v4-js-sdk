import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { commonAddressSchema, type CommonAddress } from "./common-address.js";

/** A light-weight inbound plan. */
export type CommonInboundPlanSummary = {
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
  /** A list of Walmart marketplace IDs associated with this inbound plan. */
  marketplaceIds: string[];
  /** Human-readable name of the inbound plan. */
  name: string;
  /** Specific details to identify a place. */
  sourceAddress: CommonAddress;
  /**
   * The current status of the inbound plan. Possible values: `ACTIVE`, `VOIDED`, `SHIPPED`,
   * `ERRORED`.
   */
  status: string;
};

export const commonInboundPlanSummarySchema: Schema<CommonInboundPlanSummary> =
  s.object<CommonInboundPlanSummary>({
    createdAt: s.dateTime(),
    inboundPlanId: s.string(),
    lastUpdatedAt: s.dateTime(),
    marketplaceIds: s.array(s.string()),
    name: s.string(),
    sourceAddress: commonAddressSchema,
    status: s.string(),
  });
