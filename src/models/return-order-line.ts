import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { chargeSchema, type Charge } from "./charge.js";
import { gmvSchema, type Gmv } from "./gmv.js";
import { item2Schema, type Item2 } from "./item2.js";

/**
 * A list of order lines in the return order.<br><b style='color:green;'>Market availability:
 * Global</b>
 */
export type ReturnOrderLine = {
  /**
   * The returns order line number for that return.<br><b style='color:green;'>Market availability:
   * Global</b>
   */
  returnOrderLineNumber?: number;
  /**
   * The purchase order line number for the return created.<br><b style='color:green;'>Market
   * availability: MX | CA | CL</b>
   */
  primeLineNumber?: string;
  /**
   * The sales order line number for the return created.<br><b style='color:green;'>Market
   * availability: US</b>
   */
  salesOrderLineNumber?: number;
  /**
   * Gives the reason that was selected during the return creation.<br><b
   * style='color:green;'>Market availability: Global</b>
   */
  returnReason?: string;
  /**
   * Gives the return reason code associated with returnReason.<br><b style='color:green;'>Market
   * availability: MX</b>
   */
  reasonCode?: string;
  /**
   * Gives the returnDescription for the return created. It would be empty if returnDescription is
   * 'Fraud'.<br><b style='color:green;'>Market availability: US</b>
   */
  returnDescription?: string;
  /**
   * The purchase order ID for the return created.<br><b style='color:green;'>Market availability:
   * Global</b>
   */
  purchaseOrderId?: string;
  /**
   * The purchase order line number for the return created.<br><b style='color:green;'>Market
   * availability:Global</b>
   */
  purchaseOrderLineNumber?: number;
  /** <b style='color:green;'>Market availability: US</b> */
  isReturnForException?: boolean;
  /**
   * An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item.<br><b
   * style='color:green;'>Market availability: Global</b>
   */
  item?: Item2;
  /**
   * Information relating to the charge for the orderLine.<br><b style='color:green;'>Market
   * availability: US | MX</b>
   */
  charges?: Charge[];
  /**
   * Current status of return. (e.g., 'INITIATED') <br><b style='color:green;'>Market availability:
   * MX | CA |CL</b>
   */
  status?: string;
  /**
   * Refund amount details for the return order line.<br><b style='color:green;'>Market
   * availability: MX | CA | CL</b>
   */
  refundAmount?: Gmv;
  /**
   * Determines Walmart Fulfilled vs Seller Fulfilled returns.<br><b style='color:green;'>Market
   * availability: MX | CA | CL</b>
   */
  isWfsEnabled?: string;
};

export const returnOrderLineSchema: Schema<ReturnOrderLine> = s.object<ReturnOrderLine>({
  returnOrderLineNumber: s.optional(s.int()),
  primeLineNumber: s.optional(s.string()),
  salesOrderLineNumber: s.optional(s.int()),
  returnReason: s.optional(s.string()),
  reasonCode: s.optional(s.string()),
  returnDescription: s.optional(s.string()),
  purchaseOrderId: s.optional(s.string()),
  purchaseOrderLineNumber: s.optional(s.int()),
  isReturnForException: s.optional(s.boolean()),
  item: s.optional(s.lazy(() => item2Schema)),
  charges: s.optional(s.array(s.lazy(() => chargeSchema))),
  status: s.optional(s.string()),
  refundAmount: s.optional(s.lazy(() => gmvSchema)),
  isWfsEnabled: s.optional(s.string()),
  _keysMap: {
    isWfsEnabled: "isWFSEnabled",
  },
});
