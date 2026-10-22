import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { boxItem8Schema, type BoxItem8 } from "./box-item8.js";
import { fromAddress3Schema, type FromAddress3 } from "./from-address3.js";
import { packageDimensionSchema, type PackageDimension } from "./package-dimension.js";

export type V3ShippingMultiPackageLabelsRequest = {
  /** Package Dimensions */
  packageDimensions: PackageDimension[];
  /** Box Items, 1 total quantity supported for multiple packages */
  boxItems: BoxItem8[];
  /** From address */
  fromAddress: FromAddress3;
  /** Purchase order ID. <br/><b>Applicable to SWW and WPS.</span></b> */
  purchaseOrderId: string;
  /**
   * Carrier name. The only supported carrier is 'FedEx'. <br/><b>Applicable to SWW only.</span></b>
   */
  carrierName: string;
  /**
   * Carrier service type. Supported values are - 'FEDEX_INTERNATIONAL_PRIORITY' for single
   * fedExPak/fedExEnvelope package types, 'FEDEX_INTERNATIONAL_ECONOMY' and
   * 'FEDEX_INTERNATIONAL_GROUND'. <br/><b>Applicable to SWW only.</span></b>
   */
  carrierServiceType: string;
};

export const v3ShippingMultiPackageLabelsRequestSchema: Schema<V3ShippingMultiPackageLabelsRequest> =
  s.object<V3ShippingMultiPackageLabelsRequest>({
    packageDimensions: s.array(s.lazy(() => packageDimensionSchema)),
    boxItems: s.array(s.lazy(() => boxItem8Schema)),
    fromAddress: fromAddress3Schema,
    purchaseOrderId: s.string(),
    carrierName: s.string(),
    carrierServiceType: s.string(),
  });
