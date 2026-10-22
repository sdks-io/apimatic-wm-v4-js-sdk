import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { boxDimensions5Schema, type BoxDimensions5 } from "./box-dimensions5.js";
import { boxItem10Schema, type BoxItem10 } from "./box-item10.js";
import { fromAddress4Schema, type FromAddress4 } from "./from-address4.js";
import { toAddress1Schema, type ToAddress1 } from "./to-address1.js";

export type V3ShippingLabelsShippingEstimatesRequest = {
  /**
   * Dimensions and weight of the package being shipped. For CUSTOM_PACKAGE, all dimensions and
   * weight are required.
   */
  boxDimensions: BoxDimensions5;
  /** Estimated delivery date. */
  deliverByDate?: string;
  /** ShipBy date. */
  shipByDate?: string;
  /** From address - Seller's fulfillment center address. */
  fromAddress: FromAddress4;
  /** To Address - Customer's delivery address. */
  toAddress: ToAddress1;
  /**
   * Carriers List. This value maps to 'shortName' from All carriers API response.If not provided,
   * it will fetch response for all service types.
   */
  carriers?: string[];
  /**
   * Package Type. This value maps to 'packageTypeShortName' from All carrier package types API
   * response.
   */
  packageType: string;
  /**
   * Delivery promise date flag. Pass 'false' if only services meeting promised delivery dates needs
   * to be fetched, else 'true' to fetch all supported delivery dates
   */
  includeServicesNotMeetingDeliveryPromise?: boolean;
  /** An unique identifier associated with the seller's purchase order. */
  purchaseOrderId: string;
  /**
   * boxItems - A list of items that the seller will be shipping in this package. Each item must
   * correspond to a line item in the specified purchaseOrder. The lineId and SKU fields are used to
   * uniquely identify the specific item being shipped.
   */
  boxItems: BoxItem10[];
  /**
   * addOns flag. Pass 'true' to fetch all addOns cost and we support two add ons type: SIGNATURE
   * and INSURANCE. To get Insurance Estimate, please provide purchaseOrderId and boxItems details.
   * By default, The value of addOns will be false.
   */
  addOns?: boolean;
  /**
   * hasBattery flag. Pass 'true' if the shipment consists of battery. This is a mandatory field for
   * yanwen.
   */
  hasBattery?: boolean;
};

export const v3ShippingLabelsShippingEstimatesRequestSchema: Schema<V3ShippingLabelsShippingEstimatesRequest> =
  s.object<V3ShippingLabelsShippingEstimatesRequest>({
    boxDimensions: boxDimensions5Schema,
    deliverByDate: s.optional(s.string()),
    shipByDate: s.optional(s.string()),
    fromAddress: fromAddress4Schema,
    toAddress: toAddress1Schema,
    carriers: s.optional(s.array(s.string())),
    packageType: s.string(),
    includeServicesNotMeetingDeliveryPromise: s.optional(s.boolean()),
    purchaseOrderId: s.string(),
    boxItems: s.array(s.lazy(() => boxItem10Schema)),
    addOns: s.optional(s.boolean()),
    hasBattery: s.optional(s.boolean()),
  });
