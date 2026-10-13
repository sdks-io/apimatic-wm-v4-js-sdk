import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { address1Schema, type Address1 } from "./address1.js";
import { item2Schema, type Item2 } from "./item2.js";
import { labelSchema, type Label } from "./label.js";
import { moneySchema, type Money } from "./money.js";
import { packageDimensionsSchema, type PackageDimensions } from "./package-dimensions.js";
import { shipmentStatusSchema, type ShipmentStatus } from "./shipment-status.js";
import { shippingServiceSchema, type ShippingService } from "./shipping-service.js";
import { weightSchema, type Weight } from "./weight.js";

export type Shipment = {
  shipmentId: string;
  orderId?: string;
  sellerOrderId?: string;
  itemList?: Item2[];
  shipFromAddress?: Address1;
  shipToAddress?: Address1;
  packageDimensions?: PackageDimensions;
  weight?: Weight;
  insurance?: Money;
  shippingService?: ShippingService;
  label?: Label;
  shipmentStatus: ShipmentStatus;
  createdDate?: Date;
  lastUpdatedDate?: Date;
};

export const shipmentSchema: Schema<Shipment> = s.object<Shipment>({
  shipmentId: s.string(),
  orderId: s.optional(s.string()),
  sellerOrderId: s.optional(s.string()),
  itemList: s.optional(s.array(s.lazy(() => item2Schema))),
  shipFromAddress: s.optional(s.lazy(() => address1Schema)),
  shipToAddress: s.optional(s.lazy(() => address1Schema)),
  packageDimensions: s.optional(s.lazy(() => packageDimensionsSchema)),
  weight: s.optional(s.lazy(() => weightSchema)),
  insurance: s.optional(s.lazy(() => moneySchema)),
  shippingService: s.optional(s.lazy(() => shippingServiceSchema)),
  label: s.optional(s.lazy(() => labelSchema)),
  shipmentStatus: shipmentStatusSchema,
  createdDate: s.optional(s.dateTime()),
  lastUpdatedDate: s.optional(s.dateTime()),
});
