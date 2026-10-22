import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { estimateSchema, type Estimate } from "./estimate.js";

/** Response payload containing the list of shipping cost estimates. */
export type EstimateShipmentResponseWrapper = {
  /** List of estimates. */
  estimates?: Estimate[];
  /**
   * Alert message displayed when there are issues fetching estimates for the carrier service type.
   */
  alertMessage?: string;
};

export const estimateShipmentResponseWrapperSchema: Schema<EstimateShipmentResponseWrapper> =
  s.object<EstimateShipmentResponseWrapper>({
    estimates: s.optional(s.array(s.lazy(() => estimateSchema))),
    alertMessage: s.optional(s.string()),
  });
