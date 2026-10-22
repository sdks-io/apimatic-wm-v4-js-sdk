import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Provide either `listOfGtins` or `listOfSkus`. */
export type V3WfsRecommendationShipmentQuantityRequest = {
  /** List of GTINs to request recommended shipment quantities for. */
  listOfGtins?: string[];
  /** List of SKUs to request recommended shipment quantities for. */
  listOfSkus?: string[];
};

export const v3WfsRecommendationShipmentQuantityRequestSchema: Schema<V3WfsRecommendationShipmentQuantityRequest> =
  s.object<V3WfsRecommendationShipmentQuantityRequest>({
    listOfGtins: s.optional(s.array(s.string())),
    listOfSkus: s.optional(s.array(s.string())),
  });
