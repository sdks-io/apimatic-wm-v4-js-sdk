import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { boxDimensions2Schema, type BoxDimensions2 } from "./box-dimensions2.js";
import { estimatesBoxItemSchema, type EstimatesBoxItem } from "./estimates-box-item.js";
import { shipmentLocationSchema, type ShipmentLocation } from "./shipment-location.js";
import { toShipmentLocationSchema, type ToShipmentLocation } from "./to-shipment-location.js";

export type EstimateShipmentRequestDto = {
  boxDimensions: BoxDimensions2;
  /** Estimated delivery date. */
  deliverByDate?: string;
  /** ShipBy date. */
  shipByDate?: string;
  /** From address - Seller's fulfilment center address. */
  fromAddress: ShipmentLocation;
  /** To Address - Customer's Delivery Address */
  toAddress: ToShipmentLocation;
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
  /** Purchase Order Id. This is a mandatory field for India(IN) to United States(US) shipping. */
  purchaseOrderId?: string;
  /** Box items. This is a mandatory field for India(IN) to United States(US) shipping */
  boxItems?: EstimatesBoxItem[];
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

export const estimateShipmentRequestDtoSchema: Schema<EstimateShipmentRequestDto> =
  s.object<EstimateShipmentRequestDto>({
    boxDimensions: boxDimensions2Schema,
    deliverByDate: s.optional(s.string()),
    shipByDate: s.optional(s.string()),
    fromAddress: shipmentLocationSchema,
    toAddress: toShipmentLocationSchema,
    carriers: s.optional(s.array(s.string())),
    packageType: s.string(),
    includeServicesNotMeetingDeliveryPromise: s.optional(s.boolean()),
    purchaseOrderId: s.optional(s.string()),
    boxItems: s.optional(s.array(s.lazy(() => estimatesBoxItemSchema))),
    addOns: s.optional(s.boolean()),
    hasBattery: s.optional(s.boolean()),
  });
