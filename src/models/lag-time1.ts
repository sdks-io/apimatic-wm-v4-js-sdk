import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { additionalAttributesSchema, type AdditionalAttributes } from "./additional-attributes.js";

export type LagTime1 = {
  /** A seller-provided Product ID. The response will have a decoded value of the SKU. */
  sku: string;
  /** The number of days between when the item is ordered and when it is shipped. */
  fulfillmentLagTime?: number;
  additionalAttributes?: AdditionalAttributes[];
};

export const lagTime1Schema: Schema<LagTime1> = s.object<LagTime1>({
  sku: s.string(),
  fulfillmentLagTime: s.optional(s.int()),
  additionalAttributes: s.optional(s.array(s.lazy(() => additionalAttributesSchema))),
});
