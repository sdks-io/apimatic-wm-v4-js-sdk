import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addOn7Schema, type AddOn7 } from "./add-on7.js";
import { boxDimensions3Schema, type BoxDimensions3 } from "./box-dimensions3.js";
import { boxItem6Schema, type BoxItem6 } from "./box-item6.js";
import { fromAddress2Schema, type FromAddress2 } from "./from-address2.js";
import { returnAddress1Schema, type ReturnAddress1 } from "./return-address1.js";

export type V3ShippingLabelsRequest = {
  /**
   * The package type. For example, CUSTOM_PACKAGE', 'FEDEX_ENVELOPE', or 'FEDEX_PAK'.
   *
   * <b style="color: green;">Market availability: Global
   */
  packageType: string;
  /**
   * Dimensions and weight of the package being shipped. Used together with packageType. For
   * FEDEX_PAK or FEDEX_ENVELOPE, length/height/width are predetermined by the carrier and only
   * weight is required. For CUSTOM_PACKAGE, all dimensions and weight are required.
   *
   * <b style="color: green;">Market availability: Global</b>
   */
  boxDimensions: BoxDimensions3;
  /**
   * boxItems - this is a list of items that seller will be shipping in this package, all the items
   * should be part of the purchaseOrder entered, lineId & SKU are used to identify the exact item
   * being shipped. Quantity tells us how many of that item we are shipping, it should be <= the
   * remaining unshipping quantity of the PO
   *
   * <b style="color: green;">Market availability: Global
   */
  boxItems: BoxItem6[];
  /**
   * Defines the origin address from which the order will be shipped. This represents the seller’s
   * fulfillment center location.
   *
   * <b style="color: green;">Market availability: US | CA | MX</b>
   */
  fromAddress?: FromAddress2;
  /**
   * Purchase Order Id.
   *
   * <b>Applicable to SWW and WPS.</b>
   *
   * <b style="color: green;">Market availability: US | CA | MX</b>
   */
  purchaseOrderId: string;
  /**
   * The carrier name.
   *
   * For US: This value maps to the 'shortName' parameter from a Supported carriers API response.
   *
   * Supported values for US: FedEx and USPS.
   *
   * Supported values for MX and CA: FedEx.
   *
   * Supported values for CA: MailAmericas.
   *
   * Supported values for CL: CBT sellers can use 'MailAmericas'. Domestic sellers can use
   * 'Enviame'.
   *
   * <b>Applicable to SWW.</b>
   *
   *
   *
   * <b style="color: green;">Market availability: US | CA | MX | CL </b>
   */
  carrierName: string;
  /**
   * The carrier service type.
   *
   * For US: This value maps to 'serviceTypes.name' parameter from Shipping Estimates API response
   *
   * Supported values for MX: 'FEDEX_INTERNATIONAL_PRIORITY' for fedExPak/fedExEnvelope package
   * types, 'FEDEX_INTERNATIONAL_ECONOMY', and 'FEDEX_INTERNATIONAL_GROUND'
   *
   * Supported values for CA: 'FEDEX_INTERNATIONAL_PRIORITY' for single fedExPak/fedExEnvelope
   * package types, 'FEDEX_INTERNATIONAL_ECONOMY', and 'FEDEX_INTERNATIONAL_GROUND'
   *
   * Supported values for CL: 'US_CL_MAIL_AMERICAS' and 'CN_CL_MAIL_AMERICAS'.
   *
   * <b>Applicable to SWW.</b>
   *
   *
   *
   * <strong style="color: green;">Market availability: Global</strong>
   */
  carrierServiceType: string;
  /**
   * AddOns Type. AddOns can be opted during label generation for a shipping. Supported values for
   * AddOns are INSURANCE and SIGNATURE. We support standard SIGNATURE Type for now.
   *
   * <b style="color: green;">Market availability: US only</b>
   */
  addOns?: AddOn7[];
  /**
   * Return Address. This parameter is mandatory for orders using `Yanwen` for the carrier.
   *
   * <b style="color: green;">Market availability: US only</b>
   */
  returnAddress?: ReturnAddress1;
  /**
   * The status for if the order contains a battery. This is mandatory for order using `Yanwen` as
   * the carrier. Possible values, `true` or `false`.
   *
   * <b style="color: green;">Market availability: US only</b>
   */
  hasBattery?: boolean;
  /**
   * The status for if the shipment contains hazardous material. Possible values, `true` or `false`.
   *
   * <b style="color: green;">Market availability: US only</b>
   */
  hazmat?: boolean;
  /**
   * Account Type - BYOA (bring your own account), this is an US only initiative where sellers can
   * bring their own FedEx accounts for creating labels instead of using the walmart ones.
   *
   * <b style="color: green;">Market availability: US only</b>
   */
  accountType?: string;
  /**
   * The size of the label. For example, A6,A8, LETTER_SIZE, or A4 for PDF response.
   *
   * Supported values for CL: 'LETTER_SIZE', 'A4', 'A6', 'A8' for MailAmericas
   *
   * Supported values for CA: A6, LETTER_SIZE or A4 for PDF response
   *
   *
   *
   * <b style="color: green;">Market availability: CA | CL</b>
   */
  labelSize?: string;
};

export const v3ShippingLabelsRequestSchema: Schema<V3ShippingLabelsRequest> =
  s.object<V3ShippingLabelsRequest>({
    packageType: s.string(),
    boxDimensions: boxDimensions3Schema,
    boxItems: s.array(s.lazy(() => boxItem6Schema)),
    fromAddress: s.optional(s.lazy(() => fromAddress2Schema)),
    purchaseOrderId: s.string(),
    carrierName: s.string(),
    carrierServiceType: s.string(),
    addOns: s.optional(s.array(s.lazy(() => addOn7Schema))),
    returnAddress: s.optional(s.lazy(() => returnAddress1Schema)),
    hasBattery: s.optional(s.boolean()),
    hazmat: s.optional(s.boolean()),
    accountType: s.optional(s.string()),
    labelSize: s.optional(s.string()),
  });
