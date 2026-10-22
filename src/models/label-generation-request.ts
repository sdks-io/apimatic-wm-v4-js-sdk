import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addOnSchema, type AddOn } from "./add-on.js";
import { boxDimensions1Schema, type BoxDimensions1 } from "./box-dimensions1.js";
import { boxItemSchema, type BoxItem } from "./box-item.js";
import { fromAddressSchema, type FromAddress } from "./from-address.js";
import { returnAddressSchema, type ReturnAddress } from "./return-address.js";

export type LabelGenerationRequest = {
  /**
   * Package Type. This value maps to 'packageTypeShortName' from Supported carrier package types
   * API response.
   */
  packageType: string;
  /** Box dimensions and weight for the shipping package. */
  boxDimensions: BoxDimensions1;
  /** Box Items */
  boxItems: BoxItem[];
  /** From address */
  fromAddress?: FromAddress;
  /** Purchase order ID */
  purchaseOrderId: string;
  /**
   * Carrier name. This value maps to 'shortName' from Supported carriers API response. Currently
   * FedEx and USPS are supported carriers.
   */
  carrierName: string;
  /**
   * Carrier service type. This value maps to 'serviceTypes.name' from Shipping Estimates API
   * response
   */
  carrierServiceType: string;
  /**
   * Add-ons type. Add-ons can be opted during label generation for a shipping. Supported values for
   * add-ons are INSURANCE and SIGNATURE. We support standard SIGNATURE Type for now.
   */
  addOns?: AddOn[];
  /** Return Address. This is only mandatory field for yanwen */
  returnAddress?: ReturnAddress;
  /**
   * hasBattery flag. Pass 'true' if the shipment consists of battery. This is a mandatory field for
   * yanwen.
   */
  hasBattery?: boolean;
  /** hazmat flag. Pass 'true' if the shipment consists of hazardous material. */
  hazmat?: boolean;
  /** Account Type. This is a mandatory field in case of BYOA */
  accountType?: string;
};

export const labelGenerationRequestSchema: Schema<LabelGenerationRequest> = s.object<LabelGenerationRequest>({
  packageType: s.string(),
  boxDimensions: boxDimensions1Schema,
  boxItems: s.array(s.lazy(() => boxItemSchema)),
  fromAddress: s.optional(s.lazy(() => fromAddressSchema)),
  purchaseOrderId: s.string(),
  carrierName: s.string(),
  carrierServiceType: s.string(),
  addOns: s.optional(s.array(s.lazy(() => addOnSchema))),
  returnAddress: s.optional(s.lazy(() => returnAddressSchema)),
  hasBattery: s.optional(s.boolean()),
  hazmat: s.optional(s.boolean()),
  accountType: s.optional(s.string()),
});
