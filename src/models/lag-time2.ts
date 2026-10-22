import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { additionalAttributesSchema, type AdditionalAttributes } from "./additional-attributes.js";

export type LagTime2 = {
  /**
   * A seller-provided Product ID. The response will have a decoded value of the SKU.
   *
   * <strong style="color: green;">Market availability: Global</strong>
   */
  sku: string;
  /**
   * The number of days between when the item is ordered and when it is shipped.
   *
   * <strong style="color: green;">Market availability: Global</strong>
   */
  fulfillmentLagTime?: number;
  additionalAttributes?: AdditionalAttributes[];
};

export const lagTime2Schema: Schema<LagTime2> = s.object<LagTime2>({
  sku: s.string(),
  fulfillmentLagTime: s.optional(s.int()),
  additionalAttributes: s.optional(s.array(s.lazy(() => additionalAttributesSchema))),
});
