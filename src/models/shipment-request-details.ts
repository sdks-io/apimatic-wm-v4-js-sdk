import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { address1Schema, type Address1 } from "./address1.js";
import { item2Schema, type Item2 } from "./item2.js";
import { packageDimensionsSchema, type PackageDimensions } from "./package-dimensions.js";
import { shippingServiceOptionsSchema, type ShippingServiceOptions } from "./shipping-service-options.js";
import { weightSchema, type Weight } from "./weight.js";

export type ShipmentRequestDetails = {
  /** Walmart Purchase Order ID */
  purchaseOrderId: string;
  sellerOrderId?: string;
  itemList?: Item2[];
  shipFromAddress: Address1;
  shipToAddress: Address1;
  packageDimensions: PackageDimensions;
  weight: Weight;
  shipDate: Date;
  shippingServiceOptions: ShippingServiceOptions;
};

export const shipmentRequestDetailsSchema: Schema<ShipmentRequestDetails> = s.object<ShipmentRequestDetails>({
  purchaseOrderId: s.string(),
  sellerOrderId: s.optional(s.string()),
  itemList: s.optional(s.array(s.lazy(() => item2Schema))),
  shipFromAddress: address1Schema,
  shipToAddress: address1Schema,
  packageDimensions: packageDimensionsSchema,
  weight: weightSchema,
  shipDate: s.dateTime(),
  shippingServiceOptions: shippingServiceOptionsSchema,
});
