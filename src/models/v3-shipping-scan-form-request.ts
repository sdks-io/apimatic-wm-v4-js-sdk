import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fromAddress5Schema, type FromAddress5 } from "./from-address5.js";

export type V3ShippingScanFormRequest = {
  /**
   * Client-generated unique identifier for this scan form. Acts as a natural idempotency key —
   * submitting a second POST with the same scanFormId returns 409 Conflict without creating a
   * duplicate. Use a deterministic value (e.g., sellerId + shipOnDate + shipNode) to enable safe
   * retries on network failure.
   *
   * <b style="color: green;">Market availability: US only</b>
   */
  scanFormId: string;
  /**
   * Carrier short name for the scan form request. This value maps to shortName from the supported
   * carriers API response.
   *
   * <b style="color: green;">Market availability: US only</b>
   */
  carrierName: string;
  /**
   * Ship-on date for the scan form. This is the date when the shipment is scheduled for carrier
   * pickup. Format: yyyy-MM-dd.
   *
   * <b style="color: green;">Market availability: US only</b>
   */
  shipOnDate: string;
  /**
   * Origin (ship-from) address used for the scan form.
   *
   * <b style="color: green;">Market availability: US only</b>
   */
  fromAddress: FromAddress5;
  /**
   * List of tracking numbers to include in the scan form. Maximum 200 tracking numbers per scan
   * form (USPS limit).
   *
   * <b style="color: green;">Market availability: US only</b>
   */
  trackingNumbers: string[];
  /**
   * Carrier service type. This value maps to serviceTypes.name from the shipping estimates API
   * response.
   *
   * <b style="color: green;">Market availability: US only</b>
   */
  carrierServiceType?: string;
  /**
   * Requested scan form output format. Allowed values: PDF, ZPL, PNG, BLOB. Default is PDF.
   *
   * <b style="color: green;">Market availability: US only</b>
   */
  documentFormat: string;
};

export const v3ShippingScanFormRequestSchema: Schema<V3ShippingScanFormRequest> =
  s.object<V3ShippingScanFormRequest>({
    scanFormId: s.string(),
    carrierName: s.string(),
    shipOnDate: s.string(),
    fromAddress: fromAddress5Schema,
    trackingNumbers: s.array(s.string()),
    carrierServiceType: s.optional(s.string()),
    documentFormat: s.string(),
  });
