import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LagTimeResponse = {
  /** A seller-provided Product ID. The response will have a decoded value of the SKU. */
  sku: string;
  /** The number of days between when the item is ordered and when it is shipped. */
  fulfillmentLagTime: number;
};

export const lagTimeResponseSchema: Schema<LagTimeResponse> = s.object<LagTimeResponse>({
  sku: s.string(),
  fulfillmentLagTime: s.int(),
});
