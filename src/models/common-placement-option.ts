import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { commonIncentiveSchema, type CommonIncentive } from "./common-incentive.js";

/**
 * Contains information pertaining to the placement of the contents of an inbound plan and the
 * related costs.
 */
export type CommonPlacementOption = {
  /** Discount for the offered option. */
  discounts: CommonIncentive[];
  /**
   * The expiration date of the placement option. In ISO 8601 datetime format with pattern
   * `yyyy-MM-ddTHH:mm:ss.sssZ`.
   */
  expiration?: Date;
  /** The fee for the offered option. */
  fees: CommonIncentive[];
  /**
   * The identifier of a placement option. A placement option represents the shipment splits and
   * destinations of SKUs.
   */
  placementOptionId: string;
  /** Shipment IDs. */
  shipmentIds: string[];
  /** The status of a placement option. Possible values: `OFFERED`, `ACCEPTED`, `EXPIRED`. */
  status: string;
};

export const commonPlacementOptionSchema: Schema<CommonPlacementOption> = s.object<CommonPlacementOption>({
  discounts: s.array(s.lazy(() => commonIncentiveSchema)),
  expiration: s.optional(s.dateTime()),
  fees: s.array(s.lazy(() => commonIncentiveSchema)),
  placementOptionId: s.string(),
  shipmentIds: s.array(s.string()),
  status: s.string(),
});
